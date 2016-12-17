import React, { Component } from 'react';
import Profile from '../../components/ProfileComponent/Profile';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }


  render() {
    return (
      <div className="container">
        <Profile cards={this.state.cards} />
      </div>
    )
  }
}

export default ProfileContainer;
