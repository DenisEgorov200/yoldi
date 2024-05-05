import { accountsQuery } from '@shared/api/rest/accounts'
import { useUnit } from 'effector-react'

export const Accounts = () => {
  const { data: accounts } = useUnit(accountsQuery)

  return (
    <div className="py-12">
      <h1 className="mb-7 text-title font-medium">Список аккаунтов</h1>
      <ul className="flex flex-col border-t border-gray-200">
        {accounts?.map((account, index) => (
          <li
            key={index}
            className="flex items-center gap-5 border-b border-gray-200 py-2.5"
          >
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100 text-subtitle uppercase">
              {account.image?.url ? (
                <img src={account.image.url} alt="avatar" />
              ) : (
                account.name[0]
              )}
            </div>
            <div className="flex w-full items-center justify-between gap-5 max-sm:flex-col max-sm:items-start max-sm:gap-0.5">
              <h2>{account.name}</h2>
              <a href={`mailto:${account.email}`} className="text-gray-400">
                {account.email}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
