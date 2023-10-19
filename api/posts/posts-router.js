// implement your posts router here
const express = require('express')
const Posts = require('./posts-model')
const router = express.Router();


router.get('/',  async (req,res)=>{
    const posts = await Posts.find()
    res.status(200).json(posts)
})



router.get('/:id', async (req, res) => {
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




router.post('/', async (req, res) => {

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


router.put('/:id', async (req,res)=>{
    const {title, contents} = req.body;
    if(!title || !contents){
        return res.status(400).json({
            message:"provide title and contents"
        })
    }
    const updatedPost = await Posts.update(req.params.id, req.body)
  
    if(!updatedPost){
        return res.status(404).json({
            message: "does not exist"
        })
    }
    
    const updatedUser = await Posts.findById(req.params.id)
    res.status(200).json(updatedUser)
    
    


}) 


router.delete('/:id',async (req,res)=>{
    try{
        const found = await Posts.findById(req.params.id)
        if(!found){
            return res.status(404).json({
                message: "does not exist"
            })
        }
        const deleted = await Posts.remove(req.params.id)
        res.status(201).json(found)

    }catch(err){
        res.status(505)
    }
 

})

router.get('/:id/comments', async (req,res)=>{
    try{
        const found = await Posts.findById(req.params.id)
        if(!found){
            return res.status(404).json({
                message: "does not exist"
            })
        }
    }catch{
        
    }   res.status(500).json({
        message: "error"
    })
   

})




module.exports = router;
