export const SignIn = () => {
  return (
    <div className="flex h-dvh w-dvw flex-col">
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
      <main className="flex flex-1 items-center justify-center bg-gray-100">
        <form
          action=""
          className="flex flex-col gap-3.5 rounded border border-gray-200 bg-white p-7"
        >
          <label htmlFor="" className="text-title font-medium">
            Вход в Yoldi Agency
          </label>
          <div className="group flex items-center gap-2.5 rounded border border-gray-200 px-5 py-3 focus:border-gray-400">
            <img src="/icons/email.svg" alt="email" />
            <input type="text" placeholder="E-mail" className="outline-none" />
          </div>
          <div className="group flex items-center gap-2.5 rounded border border-gray-200 px-5 py-3 focus:border-gray-400">
            <img src="/icons/email.svg" alt="email" />
            <input type="text" placeholder="E-mail" className="outline-none" />
          </div>
          <button>Войти</button>
        </form>
      </main>
      <footer className="flex w-full items-center justify-center py-6">
        <p className="text-gray-400">
          Еще нет аккаунта?{' '}
          <a href="#" className="font-medium text-black">
            Зарегистрироваться
          </a>
        </p>
      </footer>
    </div>
  )
}
