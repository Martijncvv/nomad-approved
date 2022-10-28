import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	users: [
		{
			name: 'Marty',
			id: 1,
		},
	],
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action) => {
			console.log(`User ${action.payload} added`)
			state.users.push({ name: action.payload, id: state.users.length + 1 })
		},
	},
})

export const { addUser } = userSlice.actions

export default userSlice.reducer
