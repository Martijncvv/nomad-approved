import { LatLngExpression } from 'leaflet'
import * as React from 'react'
import { useCallback, useMemo, useRef, useState } from 'react'
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMapEvents,
	Circle,
	Tooltip,
	LayerGroup,
	LayersControl,
} from 'react-leaflet'
require('./Worldmap.css')

// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'

interface IWorldmapProps {}

const Worldmap: React.FunctionComponent<IWorldmapProps> = (props) => {
	const center: LatLngExpression = [51.503, -0.09]
	const center_2 = {
		lat: 51.516,
		lng: -0.09,
	}
	const fillBlueOptions = { fillColor: 'blue' }

	function LocationMarker() {
		const [position, setPosition] = useState<LatLngExpression>([0, 0])
		const map = useMapEvents({
			click() {
				map.locate()
			},

			locationfound(e) {
				console.log('Location found: ', e)
				setPosition(e.latlng)
				map.flyTo(e.latlng, map.getZoom())
			},
		})

		return position === null ? null : (
			<Marker position={position}>
				<Popup>You are here</Popup>
			</Marker>
		)
	}

	function DraggableMarker() {
		const [draggable, setDraggable] = useState(false)
		const [position, setPosition] = useState(center)

		const markerRef: any = useRef(null)
		const eventHandlers = useMemo(
			() => ({
				dragend() {
					const marker = markerRef.current
					if (marker != null) {
						setPosition(marker.getLatLng())
					}
				},
			}),
			[]
		)
		const toggleDraggable = useCallback(() => {
			setDraggable((d) => !d)
		}, [])

		return (
			<Marker
				draggable={draggable}
				eventHandlers={eventHandlers}
				position={position}
				ref={markerRef}
			>
				<Popup minWidth={90}>
					<span onClick={toggleDraggable}>
						{draggable
							? 'Marker is draggable'
							: 'Click here to make marker draggable'}
					</span>
				</Popup>
			</Marker>
		)
	}

	return (
		<div>
			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<LayersControl position="topright">
					<LayersControl.Overlay checked name="Caffe">
						<LayerGroup>
							<Marker position={[51.505, -0.09]}>
								<Tooltip>A pretty CAFE popup.</Tooltip>
								<Popup>Popup in CAFE FeatureGroup</Popup>
							</Marker>
						</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Office">
						<LayerGroup>
							<Marker position={[51.507, -0.09]}>
								<Tooltip>
									A pretty OFFICE popup. <br /> Easily customizable.
								</Tooltip>
								<Popup>Popup in OFFICE FeatureGroup</Popup>
							</Marker>
						</LayerGroup>
					</LayersControl.Overlay>

					<Circle center={center} radius={200} />
					<LocationMarker />
				</LayersControl>
				<DraggableMarker />
			</MapContainer>
		</div>
	)
}

export default Worldmap
