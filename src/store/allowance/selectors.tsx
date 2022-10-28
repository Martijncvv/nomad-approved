export const selectTxs = (reduxState: { allowance: { txs: any } }) =>
	reduxState.allowance.txs

export const selectApprovalTxs = (reduxState: any) => {
	return reduxState.allowance.txs.filter(
		(tx: any) => tx.methodId == '0x095ea7b3'
	)
}
