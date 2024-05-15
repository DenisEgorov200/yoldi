import { createMutation } from '@farfetched/core'
import { SITE_URL } from '@shared/config'
import { createEffect } from 'effector'

export const signUpWithEmailMutation = createMutation({
  effect: createEffect<string, Response, Error>(async (json) => {
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
