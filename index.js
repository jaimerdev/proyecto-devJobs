const mongoose = require('mongoose');
require('./config/db')
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const router = require('./routes')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore =  require('connect-mongo')(session)
require('dotenv').config({path: 'variables.env'})
const app = express()

// habilitar handlebars como view
app.engine('handlebars',
    exphbs.engine({
        defaultLayout: 'layout'
    })
)

app.set('view engine', 'handlebars')

//static files
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(session({
    secret: process.env.secret,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}))

app.use('/', router())

app.listen(process.env.PORT)