export const Accounts = () => {
  return (
    <div className="py-12">
      <h1 className="mb-7 text-title font-medium">Список аккаунтов</h1>
      <ul className="flex flex-col border-t border-gray-200">
        <li className="flex items-center justify-between border-b border-gray-200 py-2.5">
          <div className="flex items-center gap-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200">
              <img src="./images/avatar.png" alt="avatar" />
            </div>
            <h2>Владислав</h2>
          </div>
          <a href="mailto:example@gmail.com" className="text-gray-400">
            example@gmail.com
          </a>
        </li>
      </ul>
    </div>
  )
}
