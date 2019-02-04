import React, { Component } from "react";
import "./styles/main.css";


class Header extends Component {
  render(){
    return (
      <div className="header">
      <h1>Tunip The Beet!</h1>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>Add a Recipie</li>
            <li>About</li>
            <li>Playlists</li>
          </ul>
        </div>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
