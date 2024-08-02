'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

export type Modal = {
	isOpen: boolean
	setIsOpen: () => void
}
const ModalContext = createContext<any>(undefined)

export function ModalWrapper({ children }: { children: ReactNode }) {
	let [isOpen, setIsOpen] = useState(false)

	return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>
}

export function useModalContext() {
	return useContext(ModalContext)
}
