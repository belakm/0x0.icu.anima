import React, { Component } from 'react'
import Meta from './shared/Meta';
import Background from './shared/Background'
import Wrapper from './shared/Wrapper'
import Jumbotron from './portfolio/Jumbotron'
import PersonalInfo from './portfolio/PersonalInfo';
import Gallery from './portfolio/Gallery';

class App extends Component {
  render() {
    const style = {
      width: '100%',
      height: '100%',
      overflow: 'auto'
    }
    return (
      <div className="App" style={style}>
        <Meta></Meta>
        <Background></Background>
        <Wrapper>
          <Jumbotron></Jumbotron>
          <PersonalInfo></PersonalInfo>
          <Gallery></Gallery>
        </Wrapper>
      </div>
    )
  }
}

export default App;
