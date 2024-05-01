import { createMutation } from '@farfetched/core'
import { SITE_URL } from '@shared/config'
import { createEffect } from 'effector'

interface Body {
  email: string
  password: string
}

interface SignUpBody extends Body {
  name: string
}

interface Response {
  value: string
  user: { email: string; id: number }
}

export const signInWithEmailMutation = createMutation({
  effect: createEffect<Body, Response, Error>(async (json: Body) => {
    const response = await fetch(`${SITE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    })

    return response.json()
  }),
})

export const signUpWithEmailMutation = createMutation({
  effect: createEffect<SignUpBody, Response, Error>(async (json: Body) => {
    const response = await fetch(`${SITE_URL}/auth/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    })

    return response.json()
  }),
})
