import axios from "axios";
import React, {useState, useEffect} from "react";

const GetBlogs = () =>{
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetchBlogs();
    }, []
    );
    
    const fetchBlogs = () =>{
        axios.get('/api/blogs')
        .then((res)=>setBlogs(res.data))
        .catch((err)=>console.log(err))
    }

    return(
        <div className="getData">
            <h1>Blogs posts</h1>
            {
                blogs.map((blog)=>{
                    return(
                        <div key={blog._id}>
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default GetBlogs