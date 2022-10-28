import * as React from 'react'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTxs } from '../../store/allowance/action'
import { selectApprovalTxs, selectTxs } from '../../store/allowance/selectors'

interface IAllowanceProps {}

const Allowance: React.FunctionComponent<IAllowanceProps> = (props) => {
	const dispatch: any = useDispatch()
	const [userAddressInput, setUserAddressInput] = useState<string>('')
	const approvalTxs = useSelector(selectApprovalTxs)

	async function handleTxButtonClick() {
		if (userAddressInput.length > 5) {
			dispatch(fetchTxs(userAddressInput))
		}
	}

	return (
		<div>
			<h2>Allowance</h2>
			<h3>Account: {userAddressInput}</h3>
			<input
				type="text"
				placeholder="Address"
				onChange={(e) => setUserAddressInput(e.target.value)}
			/>
			<button onClick={handleTxButtonClick}>Get Txs</button>
			<br />
			<p>Txs: {approvalTxs.length}</p>
			<div>
				{approvalTxs.map((txInfo: any, index: number) => (
					<div key={index}>
						<p>Nonce: {txInfo.nonce}</p>
						<p>Func: {txInfo.functionName}</p>
						<p>To: {txInfo.to}</p>
						<p>Input: {txInfo.input}</p>
						<p>Time: {txInfo.timeStamp}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Allowance
