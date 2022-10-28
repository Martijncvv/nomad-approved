import { configureStore } from '@reduxjs/toolkit'

import balanceReducer from './balance/slice'
import userReducer from './user/slice'

const store = configureStore({
	reducer: { balance: balanceReducer, user: userReducer },
})

export default store
