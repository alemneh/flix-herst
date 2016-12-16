import React, { Component } from 'react';
import Nav from '../../components/NavComponent/Nav';

class NavContainer extends Component {
  constructor() {
    super();
  }

  handleLogout() {
    axios.get(process.env.URL + '/logout')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleLogin(e) {
    console.log(e.target);
    console.log('hit');
    axios.get(process.env.URL + '/auth/twitter')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return(
      <div>
        <Nav handleLogin={ this.handleLogin }
             handleLogout={ this.handleLogout }/>
      </div>
    )
  }
}

export default NavContainer;
