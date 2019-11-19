import React from "react";

export default function Note(props) {
  let readableDate = new Date(props.modified);
  readableDate = readableDate.toString();
  return (
    <div className="note">
      <h3>{props.name}</h3>
      <p>{readableDate}</p>
      <button>remove</button>
    </div>
  );
}
