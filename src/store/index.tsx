import { configureStore } from '@reduxjs/toolkit'

import balanceReducer from './balance/slice'
import userReducer from './user/slice'
import locationReducer from './location/slice'
import allowanceReducer from './allowance/slice'

const store = configureStore({
	reducer: {
		balance: balanceReducer,
		user: userReducer,
		location: locationReducer,
		allowance: allowanceReducer,
	},
})

export default store
