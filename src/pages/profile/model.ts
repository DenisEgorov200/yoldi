import { currentProfileQuery } from '@shared/api/rest/accounts'
import { routes } from '@shared/config/routes'
import { chainRoute } from 'atomic-router'
import { restore } from 'effector'

export const currentRoute = routes.private.profile

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: currentProfileQuery,
    mapParams: ({ params }) => params.profileId,
  },
})

export const $profile = restore(currentProfileQuery.doneData, null)
