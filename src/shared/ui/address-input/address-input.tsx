import { ChangeEvent, InputHTMLAttributes } from 'react'

interface Props<T extends string>
  extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
  onValue: (value: string, { name }: { name: T }) => void
  label?: string
}

export const AddresInput = <T extends string>({
  className,
  label,
  onValue,
  ...props
}: Props<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget
    onValue(value, { name: name as T })
  }

  return (
    <div className="group flex items-center rounded border border-gray-200 focus:border-gray-400">
      <div className="border-r border-gray-200 bg-gray-100 px-5 py-3">
        <p className="text-paragraph text-gray-400">{label}</p>
      </div>
      <input
        className="w-full px-5 py-3 text-paragraph outline-none"
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}
