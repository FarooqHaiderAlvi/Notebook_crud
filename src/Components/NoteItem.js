import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/NoteContext'
export default function NoteItem(props) {

   const context = useContext(NoteContext)
   const { deleteNote } = context
   return (
      <>
         <div className="card">
            <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <p className="card-text">{props.description}</p>
               <button className="btn btn-primary stretched-link" onClick={()=>{deleteNote(props.id)}}>Delete</button>
            </div>
         </div>
      </>
   )
}
