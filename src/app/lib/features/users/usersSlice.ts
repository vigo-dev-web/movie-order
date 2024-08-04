import { actors } from './../../../../data/actors';
import { User } from '@/types/Entyties'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: User[] = [
	{
		city: { id: 'Москва', name: 'Москва' },
		email: 'qwery@fret.ru',
		message: 'Hello world',
		name: 'Georg',
		phone: '+79858765678',
		privacy: true
	} as User
]

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userAdded: (state, action: PayloadAction<User>) => {
			state.push(action.payload)
		}
	}
})

export const { userAdded } = userSlice.actions

export default userSlice.reducer
