import React, { Component } from "react";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import NoteView from "./components/NoteView";
import FolderView from "./components/FolderView";
import { Route, Switch } from "react-router-dom";
import Store from "./components/dummy-store";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: Store.folders,
      notes: Store.notes,
      folderId: ""
    };
  }
  noteClick = selectedNote => {
    console.log(selectedNote);
  };

  folderClick = selectedFolder => {
    console.log(selectedFolder);
  };

  render() {
    return (
      <div>
        <header>Noteful</header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                folders={this.state.folders}
                notes={this.state.notes}
                folderClick={this.folderClick}
                noteClick={this.noteClick}
              />
            )}
          />
          <Route
            path="/folder/:folderId"
            render={routeProps => (
              <FolderView
                folders={this.state.folders}
                notes={this.state.notes.find(
                  note => note.folderId === routeProps.match.params.folderId
                )}
              />
            )}
          />
          <Route path="/notes/:noteId" component={NoteView} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
