require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json())

app.get('/api/movies', ctrl.getMovies)
app.get('/api/movies/:id', ctrl.getMovieById)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('DB set')
  app.listen(SERVER_PORT, () => console.log(`Old Macdonald had ${SERVER_PORT} farms`))
})
