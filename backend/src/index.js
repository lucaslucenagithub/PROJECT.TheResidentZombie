const express = require('express')
const routes = require('./routes')
const app = express()

require ('./database/index')

app.use(express.json())
app.use(routes)
app.listen(3000)

module.exports = app;