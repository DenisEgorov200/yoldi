import { chainAuthorized } from '@shared/viewer'
import { currentRoute } from './model'
import { Accounts } from './ui/accounts'

export const AccountsRoute = {
  view: Accounts,
  route: chainAuthorized(currentRoute),
}
