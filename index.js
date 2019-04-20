'use strict'

let path = require('path')
let express = require('express')
let app = express()
let mainRoutes = require('mainRoutes.js')

app.use(mainRoutes)
let port = process.env.PORT || 3000; 
app.listen(port); 
console.log("Express server running on port", port);