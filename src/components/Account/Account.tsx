import * as React from 'react'
import { useParams } from 'react-router-dom'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit } from '../../store/balance/slice'
import { addUser } from '../../store/user/slice'
import { selectBalance } from '../../store/balance/selectors'
import { selectUsers, selectNumberOfUsers } from '../../store/user/selectors'

interface IAccountProps {}

const Account: React.FunctionComponent<IAccountProps> = (props) => {
	const [nameInput, setNameInput] = useState('')

	// const route_parameters = useParams()
	const dispatch = useDispatch()

	const balance = useSelector(selectBalance)
	const users: any = useSelector(selectUsers)
	const nrOfUsers: any = useSelector(selectNumberOfUsers)

	// console.log(route_parameters)
	console.log(users)
	// console.log(nrOfUsers)

	const handleFormButton = () => {
		if (nameInput.length > 2) {
			console.log('adding user')
			dispatch(addUser(nameInput))
			setNameInput('')
		}
	}

	return (
		<div>
			<p>Account</p>
			<p>Nr of users: {nrOfUsers}</p>
			<br />
			<div>
				{users.map((user: any, index: number) => (
					<div key={index}>
						<p>User name: {user.name}</p>
						<p>User id: {user.id}</p>
					</div>
				))}
			</div>
			<br />

			<div>
				<p>Add user</p>
				<input
					type="text"
					placeholder="Name"
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
				/>
				<button onClick={handleFormButton}>Add User</button>
			</div>
			<br />
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
