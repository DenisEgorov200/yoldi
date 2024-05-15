import { api } from '@shared/api'
import { tokenRecieved } from '@shared/auth'
import { routes } from '@shared/config/routes'
import { redirect } from 'atomic-router'
import { createEffect, createEvent, createStore, sample } from 'effector'

export const currentRoute = routes.auth.signIn

const showErrorAlertFx = createEffect((status) => {
  alert(status.result.message)
})

export const emailChanged = createEvent<string>()
export const passwordChanged = createEvent<string>()

export const $email = createStore('')
export const $password = createStore('')

$email.on(emailChanged, (_, email) => email)
$password.on(passwordChanged, (_, password) => password)

sample({
  clock: api.auth.signInWithEmailMutation.finished.success,
  fn: ({ result }) => result.value,
  target: tokenRecieved,
})

redirect({
  clock: api.auth.signInWithEmailMutation.finished.success,
  route: routes.private.accounts,
})

sample({
  clock: api.auth.signInWithEmailMutation.finished.success,
  target: showErrorAlertFx,
})
