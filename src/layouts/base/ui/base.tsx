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
        <div className="flex items-center gap-5">
          <p className="text-paragraph">Владислав</p>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
            <img src="./images/avatar.png" alt="avatar" />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-2.5">{children}</main>
    </div>
  )
}
