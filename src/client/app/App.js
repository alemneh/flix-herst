import React, { Component } from 'react';
import NavContainer from './containers/NavContainer/Nav';
import { browserHistory } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      cards: []
    }
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
        localStorage.userID = res.data.user;
        this.setState({
          userID: res.data.user
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }




  render() {
    return (
      <div>
        <NavContainer userID={this.state.userID }/>
        { React.cloneElement(this.props.children, {
          userID: this.state.userID,
          cards: this.state.cards
        }) }
      </div>
    )
  }
}

export default App
