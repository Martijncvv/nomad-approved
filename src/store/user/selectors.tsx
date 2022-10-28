export const selectUsers = (reduxState: { user: { users: any } }) => {
	return reduxState.user.users
}

export const selectNumberOfUsers = (reduxState: {
	user: { users: string | any[] }
}) => {
	return reduxState.user.users.length
}
