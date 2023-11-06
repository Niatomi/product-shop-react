import { ReactNode, useState } from 'react'
import { createContext } from 'react'

interface IModalContext {
  modal: boolean,
  open: () => void
  close: () => void
}

export const ModalContext = createContext<IModalContext>({
  modal: false,
  open: () => { },
  close: () => { }
})


export const ModalState = ({ children }: { children: ReactNode }) => {

  const [modal, setModal] = useState(true)
  const open = () => setModal(true)
  const close = () => setModal(false)

  return (
    <ModalContext.Provider value={ { modal, open, close } }>
      { children }
    </ModalContext.Provider>
  )
}