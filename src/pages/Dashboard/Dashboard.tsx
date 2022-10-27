import * as React from 'react'
import { NavLink } from 'react-router-dom'
import Account from '../../components/Account'
import Navbar from '../../components/Navbar'

interface IDashboardProps {}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
	return (
		<div>
			<p>Dashboard1</p>
			<p>Dashboard2</p>
			<Account />
		</div>
	)
}

export default Dashboard
