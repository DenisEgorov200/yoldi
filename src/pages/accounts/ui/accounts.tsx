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
            className="flex items-center justify-between border-b border-gray-200 py-2.5"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100 text-subtitle">
                {account.image?.url ? (
                  <img src={account.image.url} alt="avatar" />
                ) : (
                  account.name[0].toUpperCase()
                )}
              </div>
              <h2>{account.name}</h2>
            </div>
            <a href={`mailto:${account.email}`} className="text-gray-400">
              {account.email}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
