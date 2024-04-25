import { createEffect } from 'effector'

export const signInFx = createEffect(async () => {
  const url = import.meta.env.BASE_URL
  const req = await fetch(url)

  return req
})
