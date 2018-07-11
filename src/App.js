import React, { Component } from 'react';
import {Footer, About, Heading, Works} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Heading/>
          <About/>
          <Works/>
          <Footer/>
      </div>
    );
  }
}

export default App;
