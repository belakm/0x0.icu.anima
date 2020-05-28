import React, { Component } from 'react'
import Meta from './shared/Meta';
import Gallery from './gallery/Gallery';
import Header from './header/Header';
import Background from './shared/Background';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Meta></Meta>
        <Header></Header>
        <Route path="/">
          <Gallery />
        </Route>
        <Background></Background>
      </div>
    )
  }
}

export default App;
