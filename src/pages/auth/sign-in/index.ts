import { currentRoute } from './model'
import { SignIn } from './ui/sign-in'

export const SignInRoute = {
  view: SignIn,
  route: currentRoute,
}
