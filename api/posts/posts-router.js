// implement your posts router here
const express = require('express')
const Posts = require('./posts-model')
const Router = express.Router();


Router.get('/',  async (req,res)=>{
    const posts = await Posts.find()
    res.status(200).json(posts)
})



Router.get('/:id', async (req, res) => {
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




Router.post('/', async (req, res) => {

        const {title, contents} = req.body;
        if(!title ||!contents){
            res.status(400).json({
                message: "Title or contents is missing"
            })
        }else{
            const insertedPostId = await Posts.insert({title, contents})
            res.status(201).json({...req.body, ...insertedPostId})
        }
    
});



module.exports = Router;
