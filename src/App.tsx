import React, { useCallback, useMemo, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Worldmap from './components/Worldmap'

import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import Account from './components/Account'

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/Worldmap" element={<Worldmap />} />
				<Route path="/Account/:userId" element={<Account />} />
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</div>
	)
}

export default App
