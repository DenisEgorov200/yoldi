import { createRoutesView } from 'atomic-router-react'
import { SignInRoute } from './auth/sign-in'
import { SignUpRoute } from './auth/sign-up'

export const Pages = createRoutesView({
  routes: [SignInRoute, SignUpRoute],
})
