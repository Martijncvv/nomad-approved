import * as React from 'react'
import { NavLink } from 'react-router-dom'
import Account from '../../components/Account'
import Navbar from '../../components/Navbar'
import Location from '../../components/Location'
import Allowance from '../../components/Allowance'

interface IDashboardProps {}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
	return (
		<div>
			<h1>Dashboard1</h1>

			{/* <Account /> */}
			{/* <Location /> */}
			<Allowance />
		</div>
	)
}

export default Dashboard
