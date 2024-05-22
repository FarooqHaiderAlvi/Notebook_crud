import React, { useContext,useEffect } from 'react'
import NoteContext from "../context/NoteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';
export default function Note() {

  const context = useContext(NoteContext)
   const { notes,fetchNotes } = context

   useEffect(()=>{
       fetchNotes()
   },[])
  return (
    <>
      <AddNote/>

      <div className="container-fluid">
        <div className="row">
          {notes.length>0 && notes.map(function (element) {
            return (
              <div className="offset-1 col-3" key={element.id}>
                <NoteItem title={element.title} description={element.description} id={element._id} />
              </div>
            );
          })}
        </div>
      </div>




    </>
  )
}
