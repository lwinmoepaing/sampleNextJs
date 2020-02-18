const next = require('next')
const express = require('express')
require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Body Parser
  server.use(express.json())

  /** Handle By Next App Handler */
  server.get('*', (req, res) => handle(req, res))

  /** Server Listen By Express */
  server.listen(port, (err) => {
    if (err) throw err
    const Console = console
    Console.log(`Listening on PORT:${port}`)
  })
})
