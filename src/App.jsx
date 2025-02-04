
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const[bookmarks,setBookmarks]=useState([]);
  const[readingTime,setReadingTime]=useState(0)
  const handleAddBookmark=blog=>{
       const newBookmarks=[...bookmarks,blog]
       setBookmarks(newBookmarks)
       
  }
  const handleMarkasRead=time=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
     
     <Header></Header>
     <div className=' md:flex max-w-7xl mx-auto'>
     <Blogs handleAddBookmark={handleAddBookmark} handleMarkasRead={handleMarkasRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
     
    </>
  )
}

export default App
