import * as React from 'react'
import { useParams } from 'react-router-dom'

interface IAccountProps {}

const Account: React.FunctionComponent<IAccountProps> = (props) => {
	const route_parameters = useParams()
	console.log(route_parameters)
	return (
		<div>
			<p>Account</p>
			<p>{route_parameters.userId}</p>
		</div>
	)
}

export default Account
