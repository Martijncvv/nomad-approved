import React from 'react'
import logo from './logo.svg'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Worldmap from './components/Worldmap'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Navbar from './components/Navbar'

function App() {
	return (
		<div>
			<Navbar />
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}

export default App
