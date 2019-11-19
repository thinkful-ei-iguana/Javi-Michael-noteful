import React from "react";
import Note from './Note'

export default function NoteView(props) {
  console.log('noteView:',props)


  return (
    <div>
      <Note notes={props.notes}/>
    </div>


  )
}
