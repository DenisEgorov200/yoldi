import { signUpWithEmailMutation } from '@shared/api/rest/auth'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { useUnit } from 'effector-react'
import { LayoutAuthn } from 'src/layouts/authn'
import {
  $email,
  $name,
  $password,
  emailChanged,
  nameChanged,
  passwordChanged,
} from '../model'

export const SignUp = () => {
  const { start: signUp, pending } = useUnit(signUpWithEmailMutation)

  const [name, email, password] = useUnit([$name, $email, $password])
  const [handleName, handleEmail, handlePassword] = useUnit([
    nameChanged,
    emailChanged,
    passwordChanged,
  ])

  return (
    <LayoutAuthn>
      <form
        action="sign-up"
        onSubmit={(event) => {
          event.preventDefault()
          signUp({ name, email, password })
        }}
        className="flex flex-col gap-3.5 rounded border border-gray-200 bg-white p-7 max-sm:h-full max-sm:w-full"
      >
        <h2 className="text-title font-medium">Вход в Yoldi Agency</h2>
        <div className="flex flex-col gap-3.5 px-1 max-sm:p-0">
          <Input
            name="name"
            type="text"
            placeholder="Имя"
            disabled={pending}
            onValue={handleName}
            icon="/icons/user.svg"
          />
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            disabled={pending}
            onValue={handleEmail}
            icon="/icons/email.svg"
          />
          <Input
            name="password"
            type="password"
            placeholder="Пароль"
            disabled={pending}
            onValue={handlePassword}
            icon="/icons/lock.svg"
          />
        </div>
        <Button type="submit" label="Создать аккаунт" loading={pending} />
      </form>
    </LayoutAuthn>
  )
}
