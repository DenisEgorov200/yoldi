import { InputHTMLAttributes, useState } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
}

export const Input = ({ icon, type, className, ...props }: Props) => {
  const [typeInput, setTypeInput] = useState(type)

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
      <input className="outline-none" type={typeInput} {...props} />
      {type === 'password' && (
        <button type="button" onClick={handleToggle}>
          <img src="/icons/eye.svg" alt="eye" />
        </button>
      )}
    </div>
  )
}
