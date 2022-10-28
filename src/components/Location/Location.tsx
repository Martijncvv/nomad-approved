import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocations } from '../../store/location/actions'
import { selectLocations } from '../../store/location/selectors'

interface ILocationProps {}

const Location: React.FunctionComponent<ILocationProps> = (props) => {
	const dispatch: any = useDispatch()

	const locations = useSelector(selectLocations)

	useEffect(() => {
		dispatch(fetchLocations)
	}, [dispatch])

	return (
		<div>
			<h2>Posts Feed</h2>
			{!locations.length
				? 'Loading'
				: locations.map((post: any) => <p>{post.title}</p>)}
		</div>
	)
}

export default Location
