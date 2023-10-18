// implement your server here
// require your posts router and connect it here
const express = require('express');
const server = express();
const Posts = require('./posts/posts-model')
const Router = require('./posts/posts-router')
server.use(express.json())
server.use('/api/posts', Router )



module.exports = server;