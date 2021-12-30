const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const Port = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(Port, () => console.log(`Server running on port ${Port}`))
