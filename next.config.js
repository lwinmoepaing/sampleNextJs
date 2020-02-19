require('dotenv').config()

const { BASE_API_URL, PORT } = process.env

module.exports = {
  env: {
    BASE_API_URL: BASE_API_URL || 'default route',
    PORT,
  },
  // assetPrefix: '/src',
  rootServeDir: '/src',
}
