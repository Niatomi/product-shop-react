import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode,
  title: string,
  onClick: () => void
}

export function Modal({ children, title, onClick }: Readonly<ModalProps>) {
  return (
    <>
      <div
        className="fixed bg-black/50 top-0 bottom-0 left-0 right-0"
        onClick={ onClick }
      />
      <div className="absolute top-10 w-[50%] bg-white rounded text-black p-5 ">
        <h1 className='text-center p-2'>{ title }</h1>
        { children }
      </div>
    </>
  )
}