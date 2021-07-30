
const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello ')
})

app.get('/About', (req, res) => {
  res.send('About')
 // res.sandFile(path.join(__dirname,'index.html'))
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
