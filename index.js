require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/login', (req, res) => {
    res.send('fill the details to login to your account')
  })

app.get('/twitter',(req, res) => {
    res.send('<h1>please login to your twitter</h1>')
})

app.get('/yooutube',(req,res) => {
    res.send('<a href="https://www.youtube.com/watch?v=7fjOw8ApZ1I&list=PLu71SKxNbfoC4nsN2NTFEHPCyvm_CnbDq&index=9" target=_blank>Clicky</a>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})