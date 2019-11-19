import React, { Component } from "react";
import Notes from "./components/Notes";
import Folders from "./components/Folders";
import "./App.css";
import Store from "./components/dummy-store";

export class App extends Component {
  // constructor(props){
  //   super(props)

  // }

  render() {
    const { folders, notes } = Store;
    return (
      <div>
        <header>Noteful</header>
        <div id="wrapper">
          <section>
            <Folders folders={folders} />
          </section>
          <main>
            <Notes notes={notes} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
