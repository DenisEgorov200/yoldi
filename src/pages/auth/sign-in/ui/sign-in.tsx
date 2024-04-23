export const SignIn = () => {
  return (
    <>
      <header className="flex items-center justify-between border-b border-gray-200 px-5 py-3.5">
        <div className="flex items-center gap-5">
          <div>
            <img src="/icons/logo.svg" alt="yoldi" />
          </div>
          <h1 className="max-w-56">
            Разрабатываем и запускаем сложные веб проекты
          </h1>
        </div>
        <button className="text-button rounded border border-gray-200 px-8 py-1.5 font-medium transition-colors hover:bg-gray-200">
          Войти
        </button>
      </header>
    </>
  )
}
