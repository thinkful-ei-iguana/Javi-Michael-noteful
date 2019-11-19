import React from "react";
import Notes from "./Notes";
import Folders from "./Folders";
import Store from "./dummy-store";

export default function HomePage(props) {
  const noteClick = selectedNote => {
    console.log(selectedNote);
  };

  const folderClick = selectedFolder => {
    console.log(selectedFolder);
  };
  const { folders, notes } = Store;
  return (
    <div id="wrapper">
      <section>
        <Folders folders={folders} folderClick={folderClick} />
      </section>
      <main>
        <Notes notes={notes} noteClick={noteClick} />
      </main>
    </div>
  );
}
