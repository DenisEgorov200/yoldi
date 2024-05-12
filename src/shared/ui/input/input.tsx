import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

interface Props<T extends string>
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
  onValue: (value: string, { name }: { name: T }) => void
}

export const Input = <T extends string>({
  icon,
  type,
  className,
  onValue,
  ...props
}: Props<T>) => {
  const [typeInput, setTypeInput] = useState(type)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget
    onValue(value, { name: name as T })
  }

  const handleToggle = () => {
    if (typeInput === 'password') {
      setTypeInput('text')
    } else {
      setTypeInput('password')
    }
  }

  return (
    <div className="group flex items-center gap-2.5 rounded border border-gray-200 px-5 py-3 focus:border-gray-400">
      {icon && <img src={icon} alt="icon" />}
      <input
        className="w-full text-paragraph outline-none"
        type={typeInput}
        onChange={handleChange}
        {...props}
      />
      {type === 'password' && (
        <button type="button" onClick={handleToggle}>
          <img src="/icons/eye.svg" alt="eye" />
        </button>
      )}
    </div>
  )
}
