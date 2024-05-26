
import NoteContext from "../context/NoteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';

import React, { useContext, useEffect, useRef, useState } from 'react'



const Notes = () => {
   const context = useContext(NoteContext);
   const { notes, fetchNotes, editNote } = context;
   useEffect(() => {
      fetchNotes()
      // eslint-disable-next-line
   }, [])
   const ref = useRef(null)
   const [note, setNote] = useState({ etitle: "", edescription: "", eid: "" })

   const updateNote = (id, title, description,) => {
      ref.current.click();
      setNote({ eid: id, etitle: title, edescription: description })
      console.log(note, '......')
   }

   const handleClick = (e) => {
      console.log("Updating the note...", note)
      e.preventDefault();
      editNote(note.eid, note.etitle, note.edescription)

   }

   const onChange = (e) => {
      setNote({ ...note, [e.target.name]: e.target.value })
   }

   return (
      <>
         <AddNote />
         <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
         </button>
         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <form className="my-3">
                        <div className="mb-3">
                           <label htmlFor="title" className="form-label">Title</label>
                           <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                           <label htmlFor="description" className="form-label">Description</label>
                           <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                        </div>


                     </form>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <button onClick={handleClick} data-bs-dismiss="modal" type="button" className="btn btn-primary">Update Note</button>
                  </div>
               </div>
            </div>
         </div>

         <div className="container-fluid">
            <div className="row">
               <h2>You Notes</h2>
               {notes.map((note, index) => {

                  return (
                     <div className="offset-1 col-3 mx-2 mt-3" key={index}>
                        <NoteItem key={index} id={note._id} updateNote={updateNote} title={note.title} description={note.description} />
                     </div>
                  )
              })}
            </div>
         </div>
      </>
   )
}

export default Notes