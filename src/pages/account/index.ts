import { chainAuthorized } from '@shared/viewer'
import { currentRoute } from './model'
import { Account } from './ui/account'

export const AccountRoute = {
  view: Account,
  route: chainAuthorized(currentRoute),
}
