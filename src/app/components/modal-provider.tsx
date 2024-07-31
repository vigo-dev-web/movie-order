'use client'

import { createContext, ReactElement, ReactNode, useContext } from "react"

// type Modal = {
   // isOpenModal: boolean
// }

const isOpenModal = false

const ModalContext = createContext(isOpenModal)

export const ModalProvider = ({children}:{children: React.ReactNode | undefined}) => {
   <ModalContext.Provider value={isOpenModal}>
      <>
      {children}
      </>
   </ModalContext.Provider>
}

export const useModal = () => useContext(ModalContext)