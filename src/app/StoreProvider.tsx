'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './lib/store'
import { User } from '@/types/Entyties'

export default function StoreProvider({ children }: {user: User, children: React.ReactNode }) {
	const storeRef = useRef<AppStore | null>(null)
	if (!storeRef.current) {
		storeRef.current = makeStore()
		// storeRef.current = dispatch(initializeUser(user))
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
