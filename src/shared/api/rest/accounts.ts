import { createQuery } from '@farfetched/core'
import { SITE_URL } from '@shared/config'
import { createEffect } from 'effector'

interface Account {
  name: string
  email: string
  slug: string
  image: null
  cover: null
  description: string
}

export const accountsQuery = createQuery({
  effect: createEffect<void, Account[], Error>(async () => {
    const response = await fetch(`${SITE_URL}/user`)

    return response.json()
  }),
})
