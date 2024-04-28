import React, { useContext } from 'react'
import noteContext from "../context/noteContext";
import NoteItem from './NoteItem';
export default function Note() {

  const context=useContext(noteContext)
  const {notes,setNotes}=context

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {notes.map(function (element) {
            return (
              <div className="offset-1 col-3" key={element.id}>
                <NoteItem title={element.title} description={element.description} />
              </div>
            );
          })}
        </div>
      </div>




    </>
  )
}
