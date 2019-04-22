const express = require('express')
const app = express()
let home = require('./routes/index.js')

app.use('/', home)


app.listen(3000, () => console.log('Example app listening on port 3000!'))
