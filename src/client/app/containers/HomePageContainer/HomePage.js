import React, { Component } from 'react';
import axios from 'axios';
import HomePage from '../../components/HomePageComponent/HomePage';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCards, clickLikeBtn } from '../../actions/cardsAction';



class HomePageContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchCards();
  }

  handleLikeClick(card) {
    const cardId = card._id;
    const userId = this.props.userID;
    this.props.clickLikeBtn(cardId, userId)
  }

  handleGetUserCards(card) {
    browserHistory.push('view/users/cards');
  }

  render() {
    return (
      <div className="container">
        <HomePage cards={ this.props.cards }
                  isLoggedIn={ this.props.userID }
                  handleLikeClick={ this.handleLikeClick.bind(this) }
                  handleGetUserCards={ this.handleGetUserCards.bind(this) }/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards.cards
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCards, clickLikeBtn}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomePageContainer);
