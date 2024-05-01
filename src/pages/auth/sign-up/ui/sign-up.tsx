import { signUpWithEmailMutation } from '@shared/api/rest/auth'
import { routes } from '@shared/config/routes'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { Link } from 'atomic-router-react'
import { useUnit } from 'effector-react'
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
    <div className="flex h-dvh w-dvw flex-col">
      <header className="flex items-center justify-between border-b border-gray-200 px-5 py-3.5">
        <div className="flex items-center gap-5">
          <a href="#">
            <img src="/icons/logo.svg" alt="yoldi" />
          </a>
          <h1 className="max-w-60 max-sm:hidden">
            Разрабатываем и запускаем сложные веб проекты
          </h1>
        </div>
        <Button label="Войти" />
      </header>
      <main className="flex flex-1 items-center justify-center bg-gray-100">
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
      </main>
      <footer className="flex w-full items-center justify-center py-6">
        <p className="text-gray-400">
          Уже есть аккаунт?{' '}
          <Link to={routes.auth.signIn} className="font-medium text-black">
            Войти
          </Link>
        </p>
      </footer>
    </div>
  )
}
