import axios from 'axios'
import { startLoading, txsFetched } from './slice'

export const fetchTxs = (address: string) => async (dispatch: any) => {
	try {
		dispatch(startLoading())
		const response = await axios.get(
			`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&sort=asc&apikey=YourApiKeyToken`
		)

		dispatch(txsFetched(response.data))
	} catch (e: any) {
		console.log(e.message)
	}
}
