import React, { Component } from 'react';
import Profile from '../../components/ProfileComponent/Profile';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      imgURL: '',
      tagLine: '',
      userID: null
    }
  }

  handleImgChange(e) {
    console.log(e.target.value);
    this.setState({ imgURL: e.target.value});
  }

  handleTagLineChange(e) {
    console.log(e.target.value);
    this.setState({ tagLine: e.target.value });
  }

  handleCreateCardClick() {
    axios.post(process.env.URL + '/users/' + this.props.userID + '/cards', {
      tagLine: this.state.tagLine,
      imgURL: this.state.imgURL
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    return (
      <div className="container">
        <Profile cards={this.state.cards}
                 imgURL={this.state.imgURL}
                 handleImgChange={ this.handleImgChange.bind(this) }
                 handleTagLineChange={ this.handleTagLineChange.bind(this) }
                 handleCreateCardClick={ this.handleCreateCardClick.bind(this)}/>
      </div>
    )
  }
}

export default ProfileContainer;
