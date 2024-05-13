import { $profile } from '@pages/profile/model'
import { routes } from '@shared/config/routes'
import { Link } from 'atomic-router-react'
import { useUnit } from 'effector-react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const LayoutBase = ({ children }: Props) => {
  const [profile] = useUnit([$profile])

  return (
    <div className="flex h-dvh w-dvw flex-col">
      <header className="flex items-center justify-between border-b border-gray-200 px-5 py-3.5">
        <Link to={routes.private.accounts} className="flex items-center gap-5">
          <div>
            <img src="/icons/logo.svg" alt="yoldi" />
          </div>
          <h1 className="max-w-60 max-sm:hidden">
            Разрабатываем и запускаем сложные веб проекты
          </h1>
        </Link>
        {profile && (
          <Link
            to={routes.private.profile}
            params={{ profileId: profile!.slug.toString() }}
            className="flex items-center gap-5"
          >
            <p className="text-paragraph">{profile?.name}</p>
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100 text-subtitle uppercase">
              {profile?.image?.url ? (
                <img src={profile.image.url} alt={profile.name} />
              ) : (
                profile?.name[0]
              )}
            </div>
          </Link>
        )}
      </header>
      <main className="container mx-auto px-2.5">{children}</main>
    </div>
  )
}
