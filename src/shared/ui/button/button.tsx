import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'

const button = cva(['border', 'rounded'], {
  variants: {
    intent: {
      primary: [
        'rounded',
        'border-gray-200',
        'transition-colors',
        'hover:bg-gray-200',
      ],
      disabled: [
        'bg-gray-300',
        'text-gray-100',
        'pointer-events-none',
        'cursor-not-allowed',
      ],
    },
    size: {
      small: ['text-button', 'font-medium', 'py-1.5', 'px-5'],
      medium: ['text-button', 'font-medium', 'py-3', 'px-8'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  label: ReactNode
  loading?: boolean
}

export const Button = ({
  label,
  loading,
  disabled,
  className,
  intent,
  size,
  ...props
}: Props) => {
  return (
    <button
      className={button({ intent, size, className })}
      disabled={loading ?? disabled}
      {...props}
    >
      {loading ? 'Loading...' : label}
    </button>
  )
}
