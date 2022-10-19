import * as React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
require('./Worldmap.css')

// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'

interface IWorldmapProps {}

const Worldmap: React.FunctionComponent<IWorldmapProps> = (props) => (
	<div id="map">
		<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{/* <Marker position={[51.505, -0.09]}>
			<Popup>
				A pretty CSS3 popup. <br /> Easily customizable.
			</Popup>
		</Marker> */}
		</MapContainer>
	</div>
)

export default Worldmap
