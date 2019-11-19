import React from "react";

export default function Folder(props) {
  console.log(props);
  return (
    <div
      className="Folder"
      onClick={event => props.folderClick(event.target.id)}
      id={props.id}
    >
      <h3 id={props.id}>{props.name}</h3>
    </div>
  );
}
