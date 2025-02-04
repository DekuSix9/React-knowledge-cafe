/* eslint-disable react/prop-types */
import { FaBookmark } from 'react-icons/fa';




const Blog = ({blog}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags,id}=blog
    return (
        <div className='  mb-20 mt-10'>
            <img src={cover} className='h-[500px] w-full mb-4 rounded-md'></img>
           
            <div className=' flex justify-between mb-4'>

                <div className=" flex mt-2">
                    <img src={author_img} className=' w-14 h-[60px] rounded-4xl'></img>
                    <div className=" ml-6">
                        <h3 className=" text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                
                <div>
                  <span >{reading_time} min read</span>
                  <button className=' ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark ></button>
                </div>

            </div>
            <h1 className=" text-4xl mb-4">{title}</h1>
            <p>
                {
                    hashtags.map((hash)=><span key={id}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};


export default Blog;