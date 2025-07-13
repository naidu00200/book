import React, { useRef } from 'react'
import '../assets/styles/addbooks.css'

const AddBooks = () => {
  let formData = useRef()

  let handleSubmit=async (e)=>{
    e.preventDefault()

    let newBook = {
      title : formData.current[0].value,
      thumbnailUrl : formData.current[1].value,
      authors : [formData.current[2].value],
      categories : [formData.current[3].value]
    }
    console.log(newBook);

    let res = await fetch('http://localhost:4000/books',{
      method : 'POST',
      'Content-type' : 'application/json',
      body : JSON.stringify(newBook)
    })

    console.log(res)

  }
  return (
    <>
      <div className="addbooks">
        <h2>Add Books</h2>
        <div className="formbox">
          <form ref={formData} onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Title'/>
            <br />
            <input type="text" placeholder='Enter ImageUrl'/>
            <br />
            <input type="text" placeholder='Enter Authors'/>
            <br />
            <input type="text" placeholder='Enter Categories'/>
            <br />
            <button type = "submit">Add Books</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddBooks