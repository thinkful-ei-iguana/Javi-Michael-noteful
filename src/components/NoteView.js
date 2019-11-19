import React from "react";
import Note from "./Note";
import { Link } from "react-router-dom";

export default function NoteView(props) {
  console.log(props);

  return (
    <div id="wrapper">
      <section>
        <button onClick={() => props.history.goBack()}>Back</button>
        <h4>{props.notes.folderId}</h4>
      </section>
      <main>
        <Note
          name={props.notes.name}
          key={props.notes.id}
          modified={props.notes.modified}
          id={props.notes.id}
        />
        <p>{props.notes.content}</p>
      </main>
    </div>
  );
}
