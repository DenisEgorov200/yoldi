import { api } from '@shared/api'
import { tokenRecieved } from '@shared/auth'
import { routes } from '@shared/config/routes'
import { redirect } from 'atomic-router'
import { attach, sample } from 'effector'

export const currentRoute = routes.auth.signIn

export const signInFx = attach({ effect: api.auth.signInFx })

sample({
  clock: signInFx.doneData,
  fn: (clk) => clk.accessToken,
  target: tokenRecieved,
})

redirect({
  clock: signInFx.doneData,
  route: routes.private.accounts,
})
