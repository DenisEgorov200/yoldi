import { User } from '@shared/api'
import { signInWithEmailMutation } from '@shared/api/rest/auth'
import { createStore } from 'effector'

export enum ViewerStatus {
  Initial = 0,
  Pending,
  Authenticated,
  Anonymous,
}

export const $viewer = createStore<User | null>(null)
export const $viewerStatus = createStore(ViewerStatus.Initial)

$viewerStatus.on(signInWithEmailMutation.started, (status) => {
  if (status === ViewerStatus.Initial) return ViewerStatus.Pending
  return status
})

$viewer.on(signInWithEmailMutation.$finished, (_, user) => user)
$viewerStatus.on(signInWithEmailMutation.$finished, (_, user) => {
  if (user) return ViewerStatus.Authenticated
  return ViewerStatus.Anonymous
})

$viewerStatus.on(signInWithEmailMutation.finished.success, (status, error) => {
  if (error.result === 401 || error.result === 403) {
    return ViewerStatus.Anonymous
  }
  // If it is not the Authn or Authz error
  // we need to go to anonymous when its the first viewerGet call
  if (status === ViewerStatus.Pending) {
    return ViewerStatus.Anonymous
  }
  // Otherwise don't change, to mitigate screen flicks and data loss
  return status
})
