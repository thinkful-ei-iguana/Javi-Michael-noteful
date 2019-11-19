import React, { Component } from "react";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import NoteView from "./components/NoteView";
import FolderView from "./components/FolderView";
import { Route, Switch } from "react-router-dom";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>Noteful</header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/folder/:folderId" component={FolderView} />
          <Route path="/notes/:noteId" component={NoteView} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
