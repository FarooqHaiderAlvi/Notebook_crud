import { useState } from "react";
import NoteContext from "./noteContext";

import React from 'react'

export default function NoteState(props) {

    const [person,setPerson]=useState({name:'farooq',age:25})
   

  return (
    <>
      <NoteContext.Provider value={{person,setPerson}}>
          {props.children}
      </NoteContext.Provider>
    </>
  )
}
