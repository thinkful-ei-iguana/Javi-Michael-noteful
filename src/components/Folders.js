import React from "react";
import Folder from "./Folder";

export default function Folders(props) {
  console.log(props);
  return (
    <div className="Folders">
      {props.folders.map((folder, index) => {
        return <Folder key={folder.id} name={folder.name} />;
      })}
    </div>
  );
}
