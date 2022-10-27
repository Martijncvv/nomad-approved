import * as React from 'react'
import { useParams } from 'react-router-dom'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit } from '../../store/balance/slice'
import { selectBalance } from '../../store/balance/selectors'

interface IAccountProps {}

const Account: React.FunctionComponent<IAccountProps> = (props) => {
	const route_parameters = useParams()
	const dispatch = useDispatch()

	const balance = useSelector(selectBalance)

	console.log(route_parameters)
	return (
		<div>
			<p>Account</p>
			<p>{route_parameters.userId}</p>
			<p>balance {balance}</p>

			<button
				onClick={() => {
					dispatch(deposit(10))
				}}
			>
				{' '}
				Deposit $10
			</button>
		</div>
	)
}

export default Account
