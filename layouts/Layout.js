import PropTypes from 'prop-types'
import Head from 'next/head'
import Router from 'nprogress'
import React from 'react'
import Navbar from '../components/Navbar'

Router.onRouteChangeStart = (url) => {
  const Console = console
  Console.log(url)
}

const Layout = ({ children }) => (
  <div className="root">
    <Head>
      <title> Pofolio | Lwin Moe Paing</title>
    </Head>
    <Navbar />
    <header> Header</header>
    {children}
    <footer> Footer </footer>

    <style jsx>
      {`
				.root {
					padding: 1rem;
				}
				header {
					color: red;
				}
				footer {
					color: blue;
				}
			`}
    </style>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}


export default Layout
