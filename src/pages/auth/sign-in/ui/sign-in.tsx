import { signInWithEmailMutation } from '@shared/api/rest/auth'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { useUnit } from 'effector-react'
import { $email, $password, emailChanged, passwordChanged } from '../model'

export const SignIn = () => {
  const { start: signIn, pending } = useUnit(signInWithEmailMutation)

  const [email, password] = useUnit([$email, $password])
  const [handleEmail, handlePassword] = useUnit([emailChanged, passwordChanged])

  return (
    <>
      <form
        action="sign-in"
        onSubmit={(event) => {
          event.preventDefault()
          signIn({ email, password })
        }}
        className="flex flex-col gap-3.5 rounded border border-gray-200 bg-white p-7 max-sm:h-full max-sm:w-full"
      >
        <h2 className="text-title font-medium">Вход в Yoldi Agency</h2>
        <div className="flex flex-col gap-3.5 px-1 max-sm:p-0">
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            disabled={pending}
            onValue={handleEmail}
            icon="/icons/email.svg"
          />
          <Input
            name="pasword"
            type="password"
            placeholder="Пароль"
            disabled={pending}
            onValue={handlePassword}
            icon="/icons/lock.svg"
          />
        </div>
        <Button type="submit" label="Войти" loading={pending} />
      </form>
    </>
  )
}
