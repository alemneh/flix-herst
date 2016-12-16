import React, { Component } from 'react';
import Nav from './components/NavComponent/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        { this.props.childern }
      </div>
    )
  }
}

export default App;
