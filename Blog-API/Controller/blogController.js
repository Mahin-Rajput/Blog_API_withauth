const blogModel = require('../Models/blog')

const createblog = async (req,res)=>{

  



    try{

        const {title,
            description,
            tag,
            author,
            timestamp,
            state,
            read_count,
            reading_time,
            body,
      } = req.body;
      const user_id = req.user // Use req.user_id directly here

        const existingBlog = await blogModel.findOne({
            title: title,
        description: description,
        tag: tag,
        author:author,
        body:body
        })

        if(existingBlog) return res.status(400).json({message:"Blog already exists"})

        const blog = await blogModel.create({

            title: title,
      description: description,
      tag: tag,
      author: author,
      state: state,
    user_id: user_id,
      body: body,
        })
console.log(blog.user_id);

        res.status(302).json({message:"BlogCreated"})

    }catch(err){

        throw err
    }
}

const allblogs = async (req,res)=>{


try{

    const allBlogs = await blogModel.find({})
    res.send(allBlogs)

}catch(err){
    throw err
}


}

const findblog = async (req,res)=>{
    const {title} = req.body

    try{

        const findblog = await blogModel.findOne({
            title:title
        })

        if(!findblog) return res.status(401).json({message:"no blog"})


        res.send(findblog)

    }catch(err){
        throw err
    }


}

const updateblog = async (req,res)=>{

    const {title,
        description,
        tag,
        author,
        read_count,
        reading_time,
        body,
  } = req.body;
  const user_id = req.user
    try{


    //     title: title,
    //   description: description,
    //   tag: tag,
    //   author: author,
    //   state: state,
    // user_id: user_id,
    //   body: body,
        const blogupdate = await blogModel.findOne({title})

        if(!blogupdate) return res.status(401).json({message:"no blog found"})

        blogupdate.title = req.body.title
        blogupdate.description = req.body.description
        blogupdate.tag = req.body.tag
        blogupdate.author = req.body.author 
        blogupdate.state = req.body.state 
        blogupdate.user_id = user_id
        blogupdate.body = req.body.body
        const updatedBlogPost = await blogupdate.save();
    console.log(updatedBlogPost);
    
res.status(302).json({message:"updated"})
    }catch(err){
        throw err
    }

}
module.exports ={createblog,allblogs,findblog,updateblog} 