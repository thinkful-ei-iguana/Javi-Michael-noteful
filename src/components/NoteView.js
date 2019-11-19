import React from "react";
import Note from "./Note";

export default function NoteView(props) {
  console.log("noteView:", props);

  return (
    <div>
      <Note
        name={props.notes.name}
        key={props.notes.id}
        modified={props.notes.modified}
        id={props.notes.id}
      />
      <p>{props.notes.content}</p>
    </div>
  );
}
