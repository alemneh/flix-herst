import React, { Component } from 'react';
import axios from 'axios';
import HomePage from '../../components/HomePageComponent/HomePage';
import { browserHistory } from 'react-router';

// helper for checking if user already liked card


class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  componentWillMount() {
    this.getAllCards();
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
    let cards = this.state.cards.map((c) => {
      if(c._id == card._id) {
        console.log(c.likes);
        this.checkIfCardWasLiked(c);
        console.log(c.likes);
      }
      return c
    })
    axios.put(process.env.URL + '/cards/' + card._id + '/' + this.props.userID)
      .then((res) => {
        console.log(res);
        this.setState({ cards });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getAllCards() {
    axios.get(process.env.URL + '/cards')
      .then((res) => {
        console.log(res);
        this.setState({ cards: res.data.cards });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleGetUserCards(card) {
    console.log(card);
    localStorage.userId = card._owner;
    browserHistory.push('view/users/cards');
  }

  render() {
    return (
      <div className="container">
        <HomePage cards={ this.state.cards }
                  isLoggedIn={ this.props.userID }
                  handleLikeClick={ this.handleLikeClick.bind(this) }
                  handleGetUserCards={ this.handleGetUserCards.bind(this) }/>
      </div>
    )
  }
}

export default HomePageContainer;
