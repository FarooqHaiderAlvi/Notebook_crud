import React, { useState } from "react";
import { useContext } from "react";
import Note from "./Note";
import NoteContext from "../context/NoteContext";
export default function Home() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const context=useContext(NoteContext)
  console.log(context);
  const {notes,setNotes}=context


  const handleOnChange = (e) => {
    switch (e.target.id) {
      case 'title':
        setTitle(e.target.value)
        break
      case 'description':
        setDescription(e.target.value)
        break
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="mt-3 text-center">
      <h2>Add a Note</h2>

     

      <h2>Your Notes</h2>

      <Note/>

    </div>
  );


}
