/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmark,handleMarkasRead}) => {

    const[blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))





    },[])
    return (
        <div className=" md:w-2/3">
           
            {
               blogs.map(blog=><Blog key={blog.id} blog={blog}
                handleAddBookmark={handleAddBookmark}
                 handleMarkasRead={handleMarkasRead}>

               </Blog>)
            }
        </div>
    );
};

export default Blogs;