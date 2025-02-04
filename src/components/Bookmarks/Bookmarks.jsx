
/* eslint-disable react/prop-types */

import Bookmark from "./Bookmark"; 

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 pt-4 mt-2">
            <h1 className="text-3xl text-center mt-4 ">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark) => (
                    <Bookmark key={bookmark.id} bookmark={bookmark} />
                ))
            }
        </div>
    );
};

export default Bookmarks;
