import React from "react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";
export default function About() {

    const a = useContext(NoteContext)
    console.log(a)
    return (
        <>
            I am about file 
        </>
    );
}