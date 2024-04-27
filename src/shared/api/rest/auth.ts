import { createMutation } from '@farfetched/core'
import { SITE_URL } from '@shared/config'
import { createEffect } from 'effector'

interface Body {
  email: string
  password: string
}

interface Response {
  accessToken: string
  user: { email: string; id: number }
}

export const signInWithEmailMutation = createMutation({
  effect: createEffect<Body, Response, Error>(async ({ email, password }) => {
    const response = await fetch(`${SITE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    return response.json()
  }),
})
