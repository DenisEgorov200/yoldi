import { signInWithEmailMutation } from '@shared/api/rest/auth'
import { routes } from '@shared/config/routes'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { Link } from 'atomic-router-react'
import { useUnit } from 'effector-react'

export const SignIn = () => {
  const [SignIn] = useUnit([signInWithEmailMutation.start])

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
          action=""
          className="flex flex-col gap-3.5 rounded border border-gray-200 bg-white p-7 max-sm:h-full max-sm:w-full"
        >
          <label htmlFor="" className="text-title font-medium">
            Вход в Yoldi Agency
          </label>
          <div className="flex flex-col gap-3.5 px-1 max-sm:p-0">
            <Input type="email" placeholder="E-mail" icon="/icons/email.svg" />
            <Input
              type="password"
              placeholder="Пароль"
              icon="/icons/lock.svg"
            />
          </div>
          <Button label="Войти" onClick={SignIn} />
        </form>
      </main>
      <footer className="flex w-full items-center justify-center py-6">
        <p className="text-gray-400">
          Еще нет аккаунта?{' '}
          <Link to={routes.auth.signUp} className="font-medium text-black">
            Зарегистрироваться
          </Link>
        </p>
      </footer>
    </div>
  )
}
