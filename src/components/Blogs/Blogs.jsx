import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


// eslint-disable-next-line react/prop-types
const Blogs = ({handleAddBookmark}) => {

    const[blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))





    },[])
    return (
        <div className=" md:w-2/3">
           
            {
               blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddBookmark={handleAddBookmark}></Blog>)
            }
        </div>
    );
};

export default Blogs;