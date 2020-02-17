import Document, { Head, NextScript, Main } from 'next/document'

class AppDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta charset="utf-8" />
					<meta name="robots" content="nofollwo, noindex" />
				</Head>
				<Main />
				<NextScript />
				<style global jsx>{`
					body {
						background: red;
					}
				`}</style>
			</html>
		)
	}
}

export default AppDocument
