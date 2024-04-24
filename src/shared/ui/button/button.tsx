import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'

const button = cva(['font-semibold', 'border', 'rounded'], {
  variants: {
    intent: {
      primary: [
        'rounded',
        'border',
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
      medium: ['text-button', 'font-medium', 'py-1.5', 'px-8'],
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
}

export const Button = ({ label, className, intent, size, ...props }: Props) => {
  return (
    <button className={button({ intent, size, className })} {...props}>
      {label}
    </button>
  )
}
