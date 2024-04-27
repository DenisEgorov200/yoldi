import { signInWithEmailMutation } from '@shared/api/rest/auth'
import { tokenRecieved } from '@shared/auth'
import { routes } from '@shared/config/routes'
import { redirect } from 'atomic-router'
import { sample } from 'effector'

export const currentRoute = routes.auth.signIn

sample({
  clock: signInWithEmailMutation.finished.success,
  fn: ({ result }) => result.accessToken,
  target: tokenRecieved,
})

redirect({
  clock: signInWithEmailMutation.finished.success,
  route: routes.private.accounts,
})
