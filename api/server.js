// implement your server here
// require your posts router and connect it here
const express = require('express');
const server = express();
const Posts = require('./posts/posts-model')
server.use(express.json())


server.get('/api/posts',  async (req,res)=>{
    const posts = await Posts.find()
    res.status(200).json(posts)
})



server.get('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Posts.findById(id);
        console.log(post)
        if (!post) {
            // Handle the case where the post with the given ID is not found.
            res.status(404).json({
                message: "does not exists"
            })
        } else {
            res.status(200).json(post);
        }
    } catch (err) {
        res.status(500).json({
            message: "There was an error"
        });
    }
});




server.post('/api/posts/', async (req, res) => {
    try {
       
        console.log(req.body)
        const addedPost = Posts.insert(req.body)
        res.status(201).json()
    } catch (err) {
        res.status(500).json({
            message: "There was an error"
        });
    }
});





module.exports = server;