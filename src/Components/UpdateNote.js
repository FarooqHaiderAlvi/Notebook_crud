
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import NoteContext from '../context/NoteContext';
export default function UpdateNote(props) {


   const context = useContext(NoteContext)
   
   const { editNote } = context
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')

   useEffect(()=>{
      setTitle(props.title)
      setDescription(props.description)
       console.log('i am props')
   },[])

   const handleOnChange = (e) => {


      switch (e.target.id) {
         case "title":
            setTitle(e.target.value)
            break;
         case "description":
            setDescription(e.target.value)
            break
      }
   }
   const handleSubmit = (e) => {
      e.preventDefault()
      
      editNote(props.id,title, description)
      resetFormFields()
   }
   const resetFormFields = () => {
     
   }
   return (
      <>

         <div className="container mt-1 ">
            <div className="row justify-content-center py-2 ">
               <div className="col-6 border">
                  <form onSubmit={handleSubmit}>
                     <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={title} onChange={handleOnChange} />
                        {/* {valErrors.map((error, index) => (
                       error.path === "title" && <div key={`${index}`} className="text-danger">
                       {error.msg}
                         </div>
                        ))} */}
                     </div>

                     <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={description} onChange={handleOnChange} />
                     </div>

                     <button type="submit" className="btn btn-primary">update Note</button>
                  </form>
               </div>
            </div>
         </div>
      </>
   )


}
