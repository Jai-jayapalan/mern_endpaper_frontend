import React, { useState } from 'react';
import axios from 'axios';
const PostBlog = () =>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCATEGORY] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, content, category, subCategory, author };
    
        axios.post('/api/blogs', newBlog)
          .then(() => {
            setTitle('');
            setContent('');
            setAuthor('');
            setCategory('');
            setSubCATEGORY('');
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    return(
        <div className='container'>
            <h1>Create Blog</h1>
            <form onSubmit={handleSubmit} method='post' action='/getBlogs'>
                <div className='field'>
                    <label>category</label>
                    <input type='text' value={category} onChange={(e)=>setCategory(e.target.value)} /> 
                    <br />
                </div>
                <div className='field'>
                    <label>Sub category</label>
                    <input type='text' value={subCategory} onChange={(e)=>setSubCATEGORY(e.target.value)} /> <br />
                </div>
                <div className='field'>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    <br />
                </div>
                <div className='field'>
                    <label>Content:</label>
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)} />
                    <br />
                </div>
                <div className='field'>
                    <label>Author:</label>
                    <input value={author} onChange={(e)=>setAuthor(e.target.value)} />
                    <br />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PostBlog