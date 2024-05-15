import * as accounts from './rest/accounts'
import * as auth from './rest/auth'
import * as image from './rest/image'

export type { User } from './rest/common'

export const api = {
  auth,
  accounts,
  image,
}
