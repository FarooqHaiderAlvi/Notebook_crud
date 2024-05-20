import React, { useContext } from 'react'
import NoteContext from "../context/NoteContext";
import NoteItem from './NoteItem';
export default function Note() {

  const context = useContext(NoteContext)
   const { notes, setNotes } = context

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
