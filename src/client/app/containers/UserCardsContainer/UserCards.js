import React, { Component } from 'react';
import UserCards from '../../components/UserCardsComponent/UserCards';

class UserCardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCards: []
    }
  }

  componentWillMount() {
    this.getUserCards();
  }

  checkIfCardWasLiked(card) {
    const userID = this.props.userID;
    let liker = card.likes.indexOf(userID);
    console.log(liker);
    if(liker != -1) {
      card.likes.splice(liker, 1);
    } else {
      card.likes.push(userID)
    }
  }

  handleLikeClick(card) {
    const userId = localStorage.userId;
    let cards = this.state.userCards.map((c) => {
      if(c._id == card._id) {
        console.log(c.likes);
        this.checkIfCardWasLiked(c);
        console.log(c.likes);
      }
      return c
    })
    axios.put(process.env.URL + '/cards/' + card._id + '/' + userId)
      .then((res) => {
        console.log(res);
        this.setState({ cards });
      })
      .catch((err) => {
        console.log(err);
      })
  }


  getUserCards() {
    const userId = localStorage.userId;
    axios.get(process.env.URL + '/users/' + userId + '/cards')
      .then((res) => {
        console.log(res);
        this.setState({ userCards: res.data.cards });

      })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    return(
      <UserCards userCards={this.state.userCards}
                 isLoggedIn={ this.props.userID }
                 handleLikeClick={ this.handleLikeClick.bind(this) }/>
    )
  }
}



export default UserCardsContainer;
