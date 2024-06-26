import { routes } from '@shared/config/routes'
import { Button } from '@shared/ui/button'
import { Link } from 'atomic-router-react'
import { useUnit } from 'effector-react'
import { ReactNode } from 'react'
import { $signUpIsOpened } from '../model'

interface Props {
  children: ReactNode
}

export const LayoutAuthn = ({ children }: Props) => {
  const [signUpIsOpened] = useUnit([$signUpIsOpened])

  return (
    <div className="flex h-dvh w-dvw flex-col">
      <header className="flex items-center justify-between border-b border-gray-200 px-5 py-3.5">
        <div className="flex cursor-pointer items-center gap-5">
          <div>
            <img src="/icons/logo.svg" alt="yoldi" />
          </div>
          <h1 className="max-w-60 max-sm:hidden">
            Разрабатываем и запускаем сложные веб проекты
          </h1>
        </div>
        <Button label="Войти" />
      </header>
      <main className="flex flex-1 items-center justify-center bg-gray-100">
        {children}
      </main>
      <footer className="flex w-full items-center justify-center py-6">
        <p className="text-gray-400">
          {signUpIsOpened ? (
            <>
              Уже есть аккаунт?{' '}
              <Link to={routes.auth.signIn} className="font-medium text-black">
                Войти
              </Link>
            </>
          ) : (
            <>
              Еще нет аккаунта?{' '}
              <Link to={routes.auth.signUp} className="font-medium text-black">
                Зарегистрироваться
              </Link>
            </>
          )}
        </p>
      </footer>
    </div>
  )
}
