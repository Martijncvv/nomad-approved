import axios from 'axios'
import { startLoading, locationsFetched } from './slice'

const API_URL = `https://codaisseur-coders-network.herokuapp.com`

export const fetchLocations = async (dispatch: any, getState: any) => {
	try {
		dispatch(startLoading())
		const response = await axios.get(`${API_URL}/posts`)

		const posts = response.data.rows
		dispatch(locationsFetched(posts))
	} catch (e: any) {
		console.log(e.message)
	}
}
