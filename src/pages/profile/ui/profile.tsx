import { currentProfileMutation } from '@shared/api/rest/accounts'
import { $token, tokenExpired } from '@shared/auth'
import { useOnClickOutside } from '@shared/lib'
import { AddresInput } from '@shared/ui/address-input'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { Modal } from '@shared/ui/modal'
import { Textarea } from '@shared/ui/textarea'
import { useUnit } from 'effector-react'
import { FormEvent, useRef, useState } from 'react'
import {
  $address,
  $description,
  $name,
  $profile,
  addressChanged,
  descriptionChanged,
  nameChanged,
} from '../model'

export const Profile = () => {
  const { start: changeProfile, pending } = useUnit(currentProfileMutation)

  const [profile, handleTokenExpired] = useUnit([$profile, tokenExpired])

  const [name, address, description, profileId] = useUnit([
    $name,
    $address,
    $description,
    $token,
  ])
  const [handleName, handleAddress, handleDescription] = useUnit([
    nameChanged,
    addressChanged,
    descriptionChanged,
  ])

  const modalRef = useRef<HTMLDivElement>(null)
  const [isOpenModal, setIsOpenModal] = useState(false)

  useOnClickOutside(modalRef, () => setIsOpenModal(false))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    changeProfile({
      body: {
        name,
        slug: address,
        description,
        password: null,
        imageId: null,
        coverId: null,
      },
      slug: profileId,
    })

    setIsOpenModal(false)
  }

  return (
    <>
      {profile && (
        <>
          <div className="group ml-[calc(50%-50dvw)] h-[20dvh] w-dvw bg-gray-100">
            <div className="container relative mx-auto flex h-full w-full items-center justify-center px-2.5">
              <Button
                label="Загрузить"
                size="small"
                className="relative z-30 bg-white opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="absolute -bottom-[48px] left-2.5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100 text-subtitle uppercase">
                {profile.image?.url ? (
                  <img src={profile.image.url} alt={profile.name} />
                ) : (
                  profile.name[0]
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start pt-20">
            <div className="mb-7 flex justify-between gap-2.5 max-sm:flex-col">
              <div className="flex flex-col gap-2.5 align-top">
                <h1 className="text-title font-medium">{profile?.name}</h1>
                <p className="text-paragraph text-gray-400">{profile?.email}</p>
              </div>
              <div>
                <Button
                  label="Редактировать"
                  size="small"
                  onClick={() => setIsOpenModal(true)}
                />
              </div>
            </div>
            <p className="max-w-[600px] text-paragraph">
              {profile.description}
            </p>
            <div className={`${profile.description && 'mt-14'}`}>
              <Button label="Выйти" size="small" onClick={handleTokenExpired} />
            </div>
          </div>
        </>
      )}
      {isOpenModal && (
        <Modal modalRef={modalRef} className="w-full max-w-[600px] gap-6">
          <h2 className="text-title font-medium">Редактировать профиль</h2>
          <form
            action=""
            className="flex flex-col gap-3.5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className="text-button font-medium text-gray-400"
              >
                Имя
              </label>
              <Input type="text" value={name} onValue={handleName} />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className="text-button font-medium text-gray-400"
              >
                Адрес профиля
              </label>
              <AddresInput
                type="text"
                value={address}
                onValue={handleAddress}
                label="example.com/profile/"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className="text-button font-medium text-gray-400"
              >
                Описание
              </label>
              <Textarea
                name=""
                id=""
                value={description}
                onValue={handleDescription}
              />
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <Button
                type="submit"
                label="Отмена"
                className="w-full border-gray-400"
                onClick={() => setIsOpenModal(false)}
              />
              <Button
                type="submit"
                label="Сохранить"
                className="w-full bg-black text-white hover:bg-black/80"
                disabled={pending}
              />
            </div>
          </form>
        </Modal>
      )}
    </>
  )
}
