import React, { Component } from 'react';
import NavContainer from './containers/NavContainer/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null
    }
  }

  componentWillMount() {
    this.fetchUserID();
  }

  fetchUserID() {
    axios.get(process.env.URL + '/isLoggedIn')
      .then((res) => {
        console.log(res);
        this.setState({ userID: res.data.user })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        <NavContainer userID={this.state.userID }/>
        { React.cloneElement(this.props.children, { userID: this.state.userID }) }
      </div>
    )
  }
}

export default App
