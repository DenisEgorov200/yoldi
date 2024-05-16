import { forwardRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export const Modal = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <div className="fixed left-0 top-0 z-10 flex h-dvh w-dvw items-center justify-center bg-black/20">
        <div
          ref={ref}
          className={`flex flex-col rounded border border-gray-200 bg-white p-7 ${className}`}
        >
          {children}
        </div>
      </div>
    )
  },
)
