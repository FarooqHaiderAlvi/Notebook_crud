import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import UpdateNote from './UpdateNote'
export default function NoteItem(props) {

   const context = useContext(NoteContext)
   const { deleteNote, editNote, } = context
 
 
  

   
   return (
      <>


     
         <div className="card">
            <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <p className="card-text">{props.description}</p>
               <button type='button' className="btn btn-warning  mx-1" onClick={()=>{props.updateNote(props.id,props.title,props.description)}} >Edit</button>
               <button className="btn btn-danger " onClick={() => { deleteNote(props.id) }}>Delete</button>
            </div>
         </div>
      </>
   )
}
