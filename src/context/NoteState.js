import { useContext, useState, useEffect } from "react";
import NoteContext from "./NoteContext";

import React from 'react'

export default function NoteState(props) {


  // const initialNotes = []
  // const [notes, setNotes] = useState(initialNotes)

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

  const initialNotes=
  [
      
    {
      "_id": "664bb786b3617d969e30a768",
      "user": "664ba74eb3617d969e30a2f2",
      "title": "note title",
      "description": " this is my title description.",
      "tag": "General",
      "date": "2024-05-20T20:50:14.189Z",
      "__v": 0
    },
    {
      "_id": "664bb786b3617d969e30a76a",
      "user": "664ba74eb3617d969e30a2f2",
      "title": "note title",
      "description": " this is my title description.",
      "tag": "General",
      "date": "2024-05-20T20:50:14.575Z",
      "__v": 0
    },
    {
      "_id": "664bb786b3617d969e30a76c",
      "user": "664ba74eb3617d969e30a2f2",
      "title": "note title",
      "description": " this is my title description.",
      "tag": "General",
      "date": "2024-05-20T20:50:14.962Z",
      "__v": 0
    },
    {
      "_id": "664bb787b3617d969e30a76e",
      "user": "664ba74eb3617d969e30a2f2",
      "title": "note title",
      "description": " this is my title description.",
      "tag": "General",
      "date": "2024-05-20T20:50:15.310Z",
      "__v": 0
    },
    {
      "_id": "664bb787b3617d969e30a770",
      "user": "664ba74eb3617d969e30a2f2",
      "title": "note title",
      "description": " this is my title description.",
      "tag": "General",
      "date": "2024-05-20T20:50:15.589Z",
      "__v": 0
    },
    {
      "_id": "664bb787b3617d969e30a772",
      "user": "664ba74eb3617d969e30a2f2",
      "title": "note title",
      "description": " this is my title description.",
      "tag": "General",
      "date": "2024-05-20T20:50:15.884Z",
      "__v": 0
    },
   
   
  ]
  const [notes, setNotes] = useState(initialNotes);
 
  return (
    <>
      <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
      </NoteContext.Provider>
    </>
  )
}
