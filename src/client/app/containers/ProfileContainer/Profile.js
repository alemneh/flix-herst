import React, { Component } from 'react';
import Profile from '../../components/ProfileComponent/Profile';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      imgURL: ''
    }
  }

  handleImgChange(e) {
    console.log(e.target.value);
    this.setState({ imgURL: e.target.value});
  }


  render() {
    return (
      <div className="container">
        <Profile cards={this.state.cards}
                 imgURL={this.state.imgURL}
                 handleImgChange={ this.handleImgChange.bind(this) }/>
      </div>
    )
  }
}

export default ProfileContainer;
