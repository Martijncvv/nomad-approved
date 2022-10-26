import * as React from 'react'
import { NavLink } from 'react-router-dom'
require('./Navbar.css')

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
	return (
		<div>
			<NavLink to={'/Worldmap'}>Worldmap</NavLink>
			<NavLink to={'/Dashboard'}>Dashboard</NavLink>
		</div>
	)
}

export default Navbar
