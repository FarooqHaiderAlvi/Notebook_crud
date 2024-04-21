import React from 'react'
import { useState } from 'react'




export default function FetchNotes() {
  const [notes, setNotes] = useState([])

  const handleClick = () => {

    console.log('button is clicked')
    fetch('http://localhost:5000/api/notes/fetchNotes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxYWZlNzE5MDdlZjk2ODRhZTA5MzUyIn0sImlhdCI6MTcxMzA1MjM0M30.24KuXS6e9jNUXpGTgN65lCoa6nauD9YiYQ77NqzyWog'
      },
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setTimeout(function(){
          setNotes(response)
        },3000)

     
      })
      .catch(err => console.error(err));
  }

  return (

    <>
      <button className='btn btn-primary' onClick={handleClick} >Get Notes</button>

      {notes.length!==0 && <div className="container">
        <div className='row justify-content-center'>

          <div className='col-8'>
            <table className="table table-striped table-bordered">
              <thead>

                <tr>
                  <th scope="col">title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Tag</th>
                </tr>
              </thead>
              <tbody>

                {
                  notes.map(function (note, index) {
                    return (
                      <tr key={index}>
                        <th scope="row">{note.title}</th>
                        <td>{note.description}</td>
                        <td>{note.tag}</td>

                      </tr>
                    )

                  })
                }

              </tbody>
            </table>
          </div>
        </div>

      </div>}


    </>
  )
}
