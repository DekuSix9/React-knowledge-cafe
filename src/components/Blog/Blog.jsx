/* eslint-disable react/prop-types */
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddBookmark,handleMarkasRead}) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags,id } = blog;

    return (
        <div className="mb-20 mt-10 space-y-4">
            <img src={cover} className="h-[500px] w-full mb-4 rounded-md" alt="Blog Cover" />

            <div className="flex justify-between items-center mb-4 ">
                <div className="flex mt-2">
                    <img src={author_img} className="w-14 h-[60px] rounded-full" alt="Author" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <span>{reading_time} min read</span>
                    <button
                        className="ml-2 text-red-600 text-2xl"
                        onClick={() => handleAddBookmark(blog)}
                    >
                        <span><FaBookmark /></span>
                    </button>
                </div>
            </div>

            <h1 className="text-4xl mb-4">{title}</h1>
            <p>
                {hashtags.map((hash, index) => (
                    <span key={index}>
                        <a href="#">{hash}</a>
                    </span>
                ))}
            </p>
            <button onClick={()=>handleMarkasRead(reading_time,id)} className=' text-purple-800 font-bold underline cursor-pointer'>Mark as Red</button>
        </div>
    );
};

export default Blog;
