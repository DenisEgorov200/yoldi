import { startChain } from '@farfetched/atomic-router'
import { accountsQuery } from '@shared/api/rest/accounts'
import { routes } from '@shared/config/routes'
import { chainRoute } from 'atomic-router'

export const currentRoute = routes.private.accounts

chainRoute({
  route: currentRoute,
  ...startChain(accountsQuery),
})
