import { startChain } from '@farfetched/atomic-router'
import { currentProfileQuery } from '@shared/api/rest/accounts'
import { $token } from '@shared/auth'
import { routes } from '@shared/config/routes'
import { chainRoute } from 'atomic-router'
import { attach, createEvent, createStore, restore } from 'effector'

export const currentRoute = routes.private.profile

const currentProfileFx = attach({
  source: $token,
  effect: currentProfileQuery,
  mapParams: (_, token) => token,
})

chainRoute({
  route: currentRoute,
  beforeOpen: {
    effect: currentProfileFx,
    mapParams: ({ params }) => params.profileId,
  },
})

export const $profile = restore(currentProfileQuery.doneData, null)

export const nameChanged = createEvent<string>()
export const addressChanged = createEvent<string>()
export const descriptionChanged = createEvent<string>()

export const $name = createStore('')
export const $address = createStore('')
export const $description = createStore('')

$name.on(nameChanged, (_, name) => name)
$address.on(addressChanged, (_, addess) => addess)
$description.on(descriptionChanged, (_, description) => description)
