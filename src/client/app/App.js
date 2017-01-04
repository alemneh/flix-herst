import React, { Component } from 'react';
import axios from 'axios';
import NavContainer from './containers/NavContainer/Nav';
import Footer from './components/FooterComponent/Footer';
import { browserHistory } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
  
  }

  componentWillMount() {
    this.fetchUserID();
    this.checkLoggIn();
  }



  checkLoggIn() {
    if(localStorage.userID) return;
    browserHistory.push('/');
  }

  fetchUserID() {
    axios.get(process.env.URL + '/isLoggedIn')
      .then((res) => {
        console.log(res);
        localStorage.userId = res.data.user;

      })
      .catch((err) => {
        console.log(err);
      })
  }




  render() {
    return (
      <div>
        <NavContainer userID={this.state.userID }/>
        { this.props.children }
        <Footer />
      </div>
    )
  }
}

export default App
