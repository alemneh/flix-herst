import React, { Component } from 'react';
import axios from 'axios';
import UserCards from '../../components/UserCardsComponent/UserCards';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCards, clickLikeBtn } from '../../actions/cardsAction';

class UserCardsContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    const userId = localStorage.userId;
    this.props.fetchCards(userId);
  }

  handleLikeClick(card) {
    const { userId , clickLikeBtn } = this.props;
    const cardId = card._id;
    clickLikeBtn(cardId, userId);
  }

  render() {
    return(
      <UserCards userCards={this.props.cards}
                 isLoggedIn={ this.props.userId }
                 handleLikeClick={ this.handleLikeClick.bind(this) }/>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    cards: state.cards.cards,
    userId: state.user.userId
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCards, clickLikeBtn }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserCardsContainer);
