//DEPENDENCIES
const express = require('express');


//CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT
const app = express()

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('.jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


//ROUTES
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to an Awesome App about <a href = '/breads'>Bread!</a></h1>`)
})

app.get('*', (req, res) =>{
    res.send(`404 <img src = "https://http.cat/404"/>`)
})

//BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//LISTEN
app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
})
