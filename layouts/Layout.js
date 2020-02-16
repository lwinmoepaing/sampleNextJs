import PropTypes from 'prop-types'
import Navbar from '../src/components/Navbar'

const Layout = ({ children }) => {
	return (
		<div className="root">
			<Navbar />
			<header> Header</header>
			{children}
			<footer> Footer </footer>

			<style jsx>{`
				.root {
					padding: 1rem;
				}
				header {
					color: red;
				}
				footer {
					color: blue;
				}
			`}</style>
		</div>
	)
}

export default Layout

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}
