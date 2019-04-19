'use strict'

let path = require('path')
let express = require('express')
let app = express()
let mainRouter = require('/Users/Dean/Desktop/SoftwareRepo/Lab2/Section14/mainRoutes.js')

app.use(mainRouter)
let port = process.env.PORT || 3000; 
app.listen(port); 
console.log("Express server running on port", port);