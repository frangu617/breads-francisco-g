//DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override')
const mongoose = require('mongoose')



//CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT
const app = express()

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('.jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//MONGOOSE CONFIG
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}
    // () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
//   )
  
//ROUTES
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to an Awesome App about <a href = '/breads'>Bread!</a></h1>`)
})



//BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.get('*', (req, res) =>{
    res.send(`https://http.cat/404`)
})
//LISTEN
app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
})
