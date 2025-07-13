import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ReadBook = () => {
    let params=useParams()
    let bookId=params.id
    // console.log(bookId);
    let[book, setBook] = useState({})


    let fecthSingleBook = async ()=>{
        let bookApi = await fetch(`http://localhost:4000/books/${bookId}`)
        let  singleBook = await bookApi.json()
        setBook(singleBook);
    }
    fecthSingleBook()
    // console.log(book);
    let {title, thumbnailUrl, longDescription}=book
  return (
    <div className="readbook">
        <>
            <div className='image'><img src={thumbnailUrl} alt="" /></div>
            <div className='title'>{title}</div>
            <div className='long'>{longDescription}</div>
        </>
    </div>
  )
}

export default ReadBook