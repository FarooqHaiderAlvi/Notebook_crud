import { useContext, useState,useEffect } from "react";
import NoteContext from "./noteContext";

import React from 'react'

export default function NoteState(props) {
   

  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes)

  useEffect(() => {

    fetch('http://localhost:5000/api/notes/fetchNotes', {
      headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxYWZlNzE5MDdlZjk2ODRhZTA5MzUyIn0sImlhdCI6MTcxMzA1MjM0M30.24KuXS6e9jNUXpGTgN65lCoa6nauD9YiYQ77NqzyWog',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setNotes(data)
        console.log(data)
      })
      .catch(error => console.log(error))

  }, [notes])

  return (
    <>
      <NoteContext.Provider value={{notes,setNotes}}>
          {props.children}
      </NoteContext.Provider>
    </>
  )
}
