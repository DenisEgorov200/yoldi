import { chainAuthorized } from '@shared/viewer'
import { currentRoute } from './model'
import { Profile } from './ui/profile.tsx'

export const ProfileRoute = {
  view: Profile,
  route: chainAuthorized(currentRoute),
}
