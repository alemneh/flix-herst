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

  componentWillMount() {
    this.fetchUserCards();

  }



  fetchUserCards() {
    console.log(localStorage.userID +': ProfileContainer');
    const userID = localStorage.userID;

    if(!userID) return;
    axios.get(process.env.URL + '/users/' + userID + '/cards')
      .then((res) => {
        console.log(res);
        this.setState({ cards: res.data.cards });
      })
      .catch((err) => {
        console.log(err);
      })
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
    return;
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
    // console.log(this.state.cards);
    return (
      <div className="container">
        <Profile cards={this.state.cards}
                 imgURL={this.state.imgURL}
                 handleImgChange={ this.handleImgChange.bind(this) }
                 fetchUserCards={ this.fetchUserCards.bind(this) }
                 handleTagLineChange={ this.handleTagLineChange.bind(this) }
                 handleCreateCardClick={ this.handleCreateCardClick.bind(this)}/>
      </div>
    )
  }
}

export default ProfileContainer;
