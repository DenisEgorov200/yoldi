import { currentAccountQuery } from '@shared/api/rest/accounts'
import { routes } from '@shared/config/routes'
import { chainRoute } from 'atomic-router'
import { restore } from 'effector'

export const currentRoute = routes.private.account

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: currentAccountQuery,
    mapParams: ({ params }) => params.accountId,
  },
})

export const $account = restore(currentAccountQuery.doneData, null)
