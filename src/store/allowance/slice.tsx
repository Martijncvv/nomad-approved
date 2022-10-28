import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	txs: [{}],
}

const allowanceSlice = createSlice({
	name: 'allowance',
	initialState,
	reducers: {
		startLoading: (state) => {
			state.loading = true
		},
		txsFetched: (state, action) => {
			console.log('txsFetched action', action)
			state.txs = [...action.payload.result]
			state.loading = false
		},
	},
})

export const { startLoading, txsFetched } = allowanceSlice.actions
export default allowanceSlice.reducer
