import { LayoutAuthn } from '@layouts/authn'
import { LayoutBase } from '@layouts/base'
import { createRoutesView } from 'atomic-router-react'
import { AccountsRoute } from './accounts'
import { SignInRoute } from './auth/sign-in'
import { SignUpRoute } from './auth/sign-up'

export const Pages = createRoutesView({
  routes: [
    {
      route: SignInRoute.route,
      view: SignInRoute.view,
      layout: LayoutAuthn,
    },
    {
      route: SignUpRoute.route,
      view: SignUpRoute.view,
      layout: LayoutAuthn,
    },
    {
      route: AccountsRoute.route,
      view: AccountsRoute.view,
      layout: LayoutBase,
    },
  ],
})
