import { routes } from '@shared/config/routes'
import { Button } from '@shared/ui/button'
import { Link } from 'atomic-router-react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const LayoutBase = ({ children }: Props) => {
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
      <main>{children}</main>
    </div>
  )
}
