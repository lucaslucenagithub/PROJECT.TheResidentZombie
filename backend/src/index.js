const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

const port = 3333

require('./database/index')

app.use(cors())
app.use(express.json())
app.use(routes)

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`))
}

module.exports = app;