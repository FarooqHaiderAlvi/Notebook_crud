import { useContext, useState, useEffect } from "react";
import NoteContext from "./NoteContext";

import React from 'react'

export default function NoteState(props) {
   
    const [notes, setNotes] = useState([])

    const fetchNotes = async () => {

      const response = await fetch('http://localhost:5000/api/notes/fetchNotes', {
         headers: {
            'Content-Type': "application/json",
            'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0YmE3NGViMzYxN2Q5NjllMzBhMmYyIn0sImlhdCI6MTcxNjQwOTg4NX0.GJ3_92C84wKHlSW5bBZE25AZNBbFmQyEeLsRqqiHenI"
         }
      })
      const data=await response.json()
      setNotes(data)
   }
   const addNote = async (title, description) => {
      console.log('in add note', title, description)
      const res = await fetch(`http://localhost:5000/api/notes/createNote`, {
         method: `POST`,
         headers: {
           "Content-Type": "application/json",
           'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0YmE3NGViMzYxN2Q5NjllMzBhMmYyIn0sImlhdCI6MTcxNjQwOTg4NX0.GJ3_92C84wKHlSW5bBZE25AZNBbFmQyEeLsRqqiHenI"

         },
         body: JSON.stringify({
           title: title,
           description: description,
         }),
       });
      fetchNotes();
   }

   const editNote = async (id,title,description) => {

      console.log('in add note', title, description)
      const res = await fetch(`http://localhost:5000/api/notes/updateNote/${id}`, {
         method: `PUT`,
         headers: {
           "Content-Type": "application/json",
           'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0YmE3NGViMzYxN2Q5NjllMzBhMmYyIn0sImlhdCI6MTcxNjQwOTg4NX0.GJ3_92C84wKHlSW5bBZE25AZNBbFmQyEeLsRqqiHenI"

         },
         body: JSON.stringify({
           title: title,
           description: description,
         }),
       });
      fetchNotes()
      console.log('i am in edit note',id,title,description)
   }

   const deleteNote = async (id) => {
     
      const res = await fetch(`http://localhost:5000/api/notes/deleteNote/${id}`, {
         method: `DELETE`,
         headers: {
           "Content-Type": "application/json",
           'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0YmE3NGViMzYxN2Q5NjllMzBhMmYyIn0sImlhdCI6MTcxNjQwOTg4NX0.GJ3_92C84wKHlSW5bBZE25AZNBbFmQyEeLsRqqiHenI"

         }
       });

      fetchNotes()
   }
  

   return (
      <>
         <NoteContext.Provider value={{ notes, addNote, deleteNote,fetchNotes,editNote }}>
            {props.children}
         </NoteContext.Provider>
      </>
   )
}
