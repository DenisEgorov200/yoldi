import { currentAccountQuery } from '@shared/api/rest/accounts'
import { routes } from '@shared/config/routes'
import { chainRoute } from 'atomic-router'

export const currentRoute = routes.private.account

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: currentAccountQuery,
    mapParams: ({ params }) => params.accountId,
  },
})
