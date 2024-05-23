import { useContext, useState, useEffect } from "react";
import NoteContext from "./NoteContext";

import React from 'react'

export default function NoteState(props) {



   // const initialNotes = []
    const [notes, setNotes] = useState([])

   // useEffect(() => {

   //   fetch('http://localhost:5000/api/notes/fetchNotes', {
   //     headers: {
   //       'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxYWZlNzE5MDdlZjk2ODRhZTA5MzUyIn0sImlhdCI6MTcxMzA1MjM0M30.24KuXS6e9jNUXpGTgN65lCoa6nauD9YiYQ77NqzyWog',
   //       'Content-Type': 'application/json'
   //     }
   //   })
   //     .then(response => response.json())
   //     .then(data => {
   //       setNotes(data)
   //       console.log(data)
   //     })
   //     .catch(error => console.log(error))

   // }, [notes])

  

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
     
   }

   const editNote = (id) => {

   }

   const deleteNote = (id) => {
      console.log(id)
      const newNotes = notes.filter((note) => {
         return note._id !== id
      })
      setNotes(newNotes)
   }
  

   return (
      <>
         <NoteContext.Provider value={{ notes, addNote, deleteNote,fetchNotes }}>
            {props.children}
         </NoteContext.Provider>
      </>
   )
}
