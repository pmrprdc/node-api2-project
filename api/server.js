// implement your server here
// require your posts router and connect it here
const express = require('express');

const server = express();

server.use(express.json())


server.get('/api/posts', (req,res)=>{
    
  res.send("hello!")
})


module.exports = server;