import React from "react";

export default function Note(props) {
  return (
    <div className="note">
      <h3>{props.name}</h3>
      <p>{props.modified}</p>
      <button>remove</button>
    </div>
  );
}
