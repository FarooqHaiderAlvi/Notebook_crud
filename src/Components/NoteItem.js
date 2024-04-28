import React from 'react'

export default function NoteItem(props) {
    return (
        <>
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
