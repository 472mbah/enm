const express = require('express')
const app = express()
const port = 5000
const authentication = require('./authentication');


let cors = require('cors');
app.use(cors());

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/authentication', authentication)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})