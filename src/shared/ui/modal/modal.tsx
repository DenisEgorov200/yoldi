import { ReactNode, RefObject } from 'react'

interface Props<T extends HTMLDivElement = HTMLDivElement> {
  modalRef: RefObject<T | null>
  children: ReactNode
  className?: string
}

export const Modal = <T extends HTMLDivElement = HTMLDivElement>({
  modalRef,
  children,
  className,
}: Props<T>) => {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-dvh w-dvw items-center justify-center bg-black/20">
      <div
        ref={modalRef as RefObject<T>}
        className={`flex flex-col rounded border border-gray-200 bg-white p-7 ${className}`}
      >
        {children}
      </div>
    </div>
  )
}
