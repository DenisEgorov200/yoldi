import { startChain } from '@farfetched/atomic-router'
import { api } from '@shared/api'
import { routes } from '@shared/config/routes'
import { chainRoute } from 'atomic-router'

export const currentRoute = routes.private.accounts

chainRoute({
  route: currentRoute,
  ...startChain(api.accounts.accountsQuery),
})
