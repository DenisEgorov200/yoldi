import { createRoutesView } from 'atomic-router-react'
import { AccountsRoute } from './accounts'
import { SignInRoute } from './auth/sign-in'
import { SignUpRoute } from './auth/sign-up'

export const Pages = createRoutesView({
  routes: [SignInRoute, SignUpRoute, AccountsRoute],
})
