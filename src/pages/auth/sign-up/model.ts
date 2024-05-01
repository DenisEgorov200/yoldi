import { signUpWithEmailMutation } from '@shared/api/rest/auth'
import { tokenRecieved } from '@shared/auth'
import { routes } from '@shared/config/routes'
import { redirect } from 'atomic-router'
import { createEffect, createEvent, createStore, sample } from 'effector'

export const currentRoute = routes.auth.signUp

const showErrorAlertFx = createEffect((status) => {
  alert(status.result.message)
})

export const nameChanged = createEvent<string>()
export const emailChanged = createEvent<string>()
export const passwordChanged = createEvent<string>()

export const $name = createStore('')
export const $email = createStore('')
export const $password = createStore('')

$name.on(nameChanged, (_, name) => name)
$email.on(emailChanged, (_, email) => email)
$password.on(passwordChanged, (_, password) => password)

sample({
  clock: signUpWithEmailMutation.finished.success,
  fn: ({ result }) => result.value,
  target: tokenRecieved,
})

redirect({
  clock: signUpWithEmailMutation.finished.success,
  route: routes.auth.signIn,
})

sample({
  clock: signUpWithEmailMutation.finished.success,
  target: showErrorAlertFx,
})
