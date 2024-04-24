import { createHistoryRouter, createRoute } from 'atomic-router'

export const routes = {
  auth: {
    signIn: createRoute(),
    signUp: createRoute(),
  },
  private: {
    accounts: createRoute(),
    account: createRoute<{ accountId: string }>(),
  },
}

export const mappedRoutes = [
  {
    route: routes.auth.signIn,
    path: '/sign-in',
  },
  {
    route: routes.auth.signUp,
    path: '/sign-up',
  },
  {
    route: routes.private.accounts,
    path: '/accounts',
  },
  {
    route: routes.private.account,
    path: '/accounts/:accountId',
  },
]

export const router = createHistoryRouter({
  routes: mappedRoutes,
})
