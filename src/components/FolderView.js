import React from "react";
import Folders from "./Folders";
import Notes from "./Notes";

export default function FolderView(props) {
  const { folders, notes } = props;
  return (
    <div id="wrapper">
      <section>
        <Folders folders={folders} folderClick={props.folderClick} />
      </section>
      <main>
        <Notes notes={notes} noteClick={props.noteClick} />
      </main>
    </div>
  );
}
