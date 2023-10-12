// require your server and launch it here
// require your server and launch it here
const server = require('./api/server')
const express = require('express')
const port = 8000;


server.listen(port, ()=>{
    console.log('hello')

})