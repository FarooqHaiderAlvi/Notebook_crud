import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import NoteContext from '../context/NoteContext';

export default function AddNote() {

   const context=useContext(NoteContext)
   console.log(context);
   const {addNote}=context
   const [title,setTitle]=useState('')
   const [description,setDescription]=useState('')

   const handleOnChange=(e)=>{
     
      switch(e.target.id){
         case "title":
            setTitle(e.target.value)
            break;
         case "description":
            setDescription(e.target.value)
            break
      }
   }
   const handleSubmit=(e)=>{
      e.preventDefault()
      addNote(title,description)
   }
   return (
      <>

         <div className="container mt-1 ">
            <div className="row justify-content-center py-2 ">
               <div className="col-6 border">
                  <form onSubmit={handleSubmit}>
                     <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" onChange={handleOnChange} />
                        {/* {valErrors.map((error, index) => (
                    error.path === "title" && <div key={`${index}`} className="text-danger">
                    {error.msg}
                      </div>
                     ))} */}
                     </div>

                     <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" onChange={handleOnChange} />
                     </div>

                     <button type="submit" className="btn btn-primary">Assign Task</button>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}
