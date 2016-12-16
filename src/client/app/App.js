import React, { Component } from 'react';
import NavContainer from './containers/NavContainer/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        { this.props.children }
      </div>
    )
  }
}

export default App
