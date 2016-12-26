import React, { Component } from 'react';
import axios from 'axios';
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
    // return;
    let cards = this.state.cards;


    axios.post(process.env.URL + '/users/' + this.props.userID + '/cards', {
      tagLine: this.state.tagLine,
      imgURL: this.state.imgURL,
      twitterIMG: this.props.twitterIMG
    })
      .then((res) => {
        cards.push(res.data.newCard);
        this.setState({ cards });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleRemoveCardClick(card) {
    let cards = this.state.cards.filter((c) => c._id != card._id);
    axios.delete(process.env.URL + '/users/' + card._owner + '/cards/' + card._id)
      .then((res) => {
        console.log(res);
        this.setState({ cards });
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
                 twitterIMG={ this.props.twitterIMG }
                 handleImgChange={ this.handleImgChange.bind(this) }
                 fetchUserCards={ this.fetchUserCards.bind(this) }
                 handleTagLineChange={ this.handleTagLineChange.bind(this) }
                 handleCreateCardClick={ this.handleCreateCardClick.bind(this)}
                 handleRemoveCardClick={ this.handleRemoveCardClick.bind(this)}/>
      </div>
    )
  }
}

export default ProfileContainer;
