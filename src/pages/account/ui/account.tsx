import { Button } from '@shared/ui/button'

export const Account = () => {
  return (
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
          В
        </div>
        <div className="mb-7 flex justify-between">
          <div className="flex flex-col gap-2.5 align-top">
            <h1 className="text-title font-medium">Владислав</h1>
            <p className="text-paragraph text-gray-400">example@gmail.com</p>
          </div>
          <div>
            <Button label="Редактировать" size="small" />
          </div>
        </div>
        <p className="max-w-[600px] text-paragraph">
          Рыбатекст используется дизайнерами, проектировщиками и фронтендерами,
          когда нужно быстро заполнить макеты или прототипы содержимым. Это
          тестовый контент, который не должен нести никакого смысла, лишь
          показать наличие самого текста или продемонстрировать типографику в
          деле.
        </p>
        <div className="mt-14">
          <Button label="Выйти" size="small" />
        </div>
      </div>
    </>
  )
}
