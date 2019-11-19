import React from "react";
import Folders from "./Folders";
import Notes from "./Notes";

export default function FolderView(props) {
  console.log(props);
  return (
    <div id="wrapper">
      <section>
        <Folders folders={props.folders} />
      </section>
      <main>
        <Notes notes={props.notes} />
      </main>
    </div>
  );
}
