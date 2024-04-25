import { routes } from '@shared/config/routes'
import { redirect } from 'atomic-router'
import { createEvent, createStore } from 'effector'
import { persist } from 'effector-storage/local'

const $token = createStore('')
export const tokenRecieved = createEvent<string>()
export const tokenExpired = createEvent()

$token.on(tokenRecieved, (_, token) => token).reset(tokenExpired)

export const isAuth = $token.map((token) => Boolean(token))

persist({
  store: $token,
  key: 'token',
  serialize: (value) => value,
  deserialize: (value) => value,
})

redirect({
  clock: tokenExpired,
  route: routes.auth.signIn,
})
