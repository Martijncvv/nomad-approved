export const selectBalance = (reduxState: { balance: { amount: any } }) =>
	reduxState.balance.amount
