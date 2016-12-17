import React, { Component } from 'react';
import Nav from '../../components/NavComponent/Nav';
import { browserHistory } from 'react-router';

class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  componentWillMount() {
    this.checkLogIn();
  }

  checkLogIn() {
    axios.get(process.env.URL + '/isLoggedIn')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleLogoutClick() {
    axios.get(process.env.URL + '/logout')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleLoginClick() {
    console.log('hit');
    browserHistory.push('/auth/twitter');
  }

  render() {
    return(
      <div>
        <Nav handleLogoutClick={ this.handleLogoutClick }
             isLoggedIn={ this.state.isLoggedIn }/>
      </div>
    )
  }
}

export default NavContainer;
