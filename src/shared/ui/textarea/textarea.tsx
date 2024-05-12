import { ChangeEvent, TextareaHTMLAttributes } from 'react'

interface Props<T extends string>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: string
  onValue: (value: string, { name }: { name: T }) => void
}

export const Textarea = <T extends string>({ onValue, ...props }: Props<T>) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = event.currentTarget
    onValue(value, { name: name as T })
  }

  return (
    <textarea
      className="group flex resize-none items-center gap-2.5 rounded border border-gray-200 px-5 py-3 focus:border-gray-400"
      onChange={handleChange}
      {...props}
    >
      textarea
    </textarea>
  )
}
