import { tokenExpired } from '@shared/auth'
import { AddresInput } from '@shared/ui/address-input'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { Modal } from '@shared/ui/modal'
import { Textarea } from '@shared/ui/textarea'
import { useUnit } from 'effector-react'
import { $account } from '../model'

export const Account = () => {
  const [account, handleTokenExpired] = useUnit([$account, tokenExpired])

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
              <Button label="Выйти" size="small" onClick={handleTokenExpired} />
            </div>
          </div>
        </>
      )}
      <Modal className="w-full max-w-[600px] gap-6">
        <h2 className="text-title font-medium">Редактировать профиль</h2>
        <form action="" className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-button font-medium text-gray-400">
              Имя
            </label>
            <Input type="text" onValue={() => console.log('hello')} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-button font-medium text-gray-400">
              Адрес профиля
            </label>
            <AddresInput type="text" onValue={() => console.log('hello')} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-button font-medium text-gray-400">
              Описание
            </label>
            <Textarea
              name=""
              id=""
              value=""
              defaultValue=""
              onValue={() => console.log('hello')}
            />
          </div>
          <div className="mt-6 flex items-center gap-2.5">
            <Button
              type="submit"
              label="Отмена"
              className="w-full border-gray-400"
            />
            <Button
              type="submit"
              label="Сохранить"
              className="w-full bg-black text-white hover:bg-black/80"
            />
          </div>
        </form>
      </Modal>
    </>
  )
}
