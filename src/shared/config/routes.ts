import { createHistoryRouter, createRoute } from 'atomic-router'
import { sample } from 'effector'
import { createBrowserHistory } from 'history'
import { appStarted } from './init'

export const routes = {
  auth: {
    signIn: createRoute(),
    signUp: createRoute(),
  },
  private: {
    accounts: createRoute(),
    profile: createRoute<{ profileId: string }>(),
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
    route: routes.private.profile,
    path: '/profile/:profileId',
  },
]

export const router = createHistoryRouter({
  routes: mappedRoutes,
})

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
})
