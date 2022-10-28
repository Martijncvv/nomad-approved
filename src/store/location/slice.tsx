import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	locations: [{}],
}

const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		startLoading: (state) => {
			state.loading = true
		},
		locationsFetched: (state, action) => {
			console.log('locationsFetched action', action)
			state.locations = [...action.payload]
			state.loading = false
		},
	},
})

export const { startLoading, locationsFetched } = locationSlice.actions
export default locationSlice.reducer
