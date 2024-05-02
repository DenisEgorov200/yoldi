import { $isAuth } from '@shared/auth'
import { routes } from '@shared/config/routes'
import {
  chainRoute,
  redirect,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
} from 'atomic-router'
import { createEvent, sample } from 'effector'

export function chainAuthorized<Params extends RouteParams>(
  route: RouteInstance<Params>,
) {
  const checkSessionStarted = createEvent<RouteParamsAndQuery<Params>>()

  const alreadyAuthorized = sample({
    clock: checkSessionStarted,
    filter: $isAuth,
  })

  const forbidden = sample({
    clock: checkSessionStarted,
    filter: $isAuth.map((v: boolean) => !v),
  })

  redirect({
    clock: forbidden,
    route: routes.auth.signIn,
  })

  return chainRoute({
    route,
    beforeOpen: checkSessionStarted,
    openOn: [alreadyAuthorized],
    cancelOn: [forbidden],
  })
}
