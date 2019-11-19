import React from "react";
import Note from "./Note";

export default function NoteView(props) {
  console.log("noteView:", props);

  return (
    <div id="wrapper">
      <section>
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
