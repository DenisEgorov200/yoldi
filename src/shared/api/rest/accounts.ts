import { createMutation, createQuery } from '@farfetched/core'
import { SITE_URL } from '@shared/config'
import { createEffect } from 'effector'

interface Account {
  name: string
  email: string
  slug: string
  image: Image
  cover: Cover
  description: string
}

interface Image {
  id: string
  url: string
  width: string
  height: string
}

interface Cover {
  id: string
  url: string
  width: string
  height: string
}

export const accountsQuery = createQuery({
  effect: createEffect<void, Account[], Error>(async () => {
    const response = await fetch(`${SITE_URL}/user`)

    return response.json()
  }),
})

// TODO: change effect to query in ff
export const currentProfileQuery = createEffect<string, Account, Error>(
  async (slug) => {
    const response = await fetch(`${SITE_URL}/profile`, {
      headers: {
        'X-API-KEY': slug,
      },
    })

    return response.json()
  },
)

export const currentProfileMutation = createMutation({
  effect: createEffect<string, Account, Error>(async ({ body, slug }) => {
    const response = await fetch(`${SITE_URL}/profile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': slug,
      },
      body: JSON.stringify(body),
    })

    return response.json()
  }),
})
