import React from "react";
import { useContext } from "react";
import noteContext from "../context/noteContext";
export default function Home(){

const {person,setPerson}=useContext(noteContext)

 const changeName=()=>{
    setPerson({name:'imran'})
 }
return(
    <>
    I am Home. {person.name}
    <button onClick={changeName}>change name </button>
    </>
); 


}