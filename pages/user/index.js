import Layout from '../../layouts/Layout'
import Link from 'next/link'

function User(props) {
	return (
		<Layout>
			<h3> User </h3>
			{props.users ? (
				<ul>
					{props.users.map(user_id => (
						<li key={user_id}>
							<Link
								href={`/user/detail?id=${user_id}`}
								as={`/user/${user_id}`}
							>
								<a> User {user_id} </a>
							</Link>
						</li>
					))}
				</ul>
			) : (
				''
			)}
		</Layout>
	)
}

User.getInitialProps = async () => {
	const users = await Array.from({ length: 10 }, (_, i) => i + 1)
	return { users }
}

export default User
