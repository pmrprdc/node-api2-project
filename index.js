// require your server and launch it here
// require your server and launch it here
const server = require('./api/server')
const express = require('express')
const port = 9000;


server.listen(port, ()=>{
    console.log(`server has started on port ${port}`)

})