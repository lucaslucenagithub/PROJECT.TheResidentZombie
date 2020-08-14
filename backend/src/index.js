const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

require ('./database/index')

app.use(express.json())
app.use(routes)
app.listen(3000)