import { Button } from '@shared/ui/button'
import { useUnit } from 'effector-react'
import { $account } from '../model'

export const Account = () => {
  const [account] = useUnit([$account])

  return (
    <>
      {account && (
        <>
          <div className="group absolute right-0 flex h-[20dvh] w-dvw items-center justify-center bg-gray-100">
            <Button
              label="Загрузить"
              size="small"
              className="relative z-30 bg-white opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
          <div className="relative z-10 mt-[15dvh] flex flex-col justify-start">
            <div className="mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100 text-subtitle uppercase">
              {account.image?.url ? (
                <img src={account.image.url} alt={account.name} />
              ) : (
                account.name[0]
              )}
            </div>
            <div className="mb-7 flex justify-between">
              <div className="flex flex-col gap-2.5 align-top">
                <h1 className="text-title font-medium">{account?.name}</h1>
                <p className="text-paragraph text-gray-400">{account?.email}</p>
              </div>
              <div>
                <Button label="Редактировать" size="small" />
              </div>
            </div>
            <p className="max-w-[600px] text-paragraph">
              {account?.description}
            </p>
            <div className={`${account?.description && 'mt-14'}`}>
              <Button label="Выйти" size="small" />
            </div>
          </div>
        </>
      )}
    </>
  )
}
