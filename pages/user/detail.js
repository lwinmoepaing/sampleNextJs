import Layout from '../../layouts/Layout'

const UserProfile = ({ url }) => {
	return (
		<Layout>
			<p> User Profile {url.query.id} </p>
		</Layout>
	)
}

export default UserProfile
