import React, { Component } from 'react';
import axios from 'axios';
import Profile from '../../components/ProfileComponent/Profile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCards, copyTagLineInput, copyImgURLInput, removeCard, creatCard } from '../../actions/cardsAction';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { userId } = this.props;
    this.props.fetchCards(userId);

  }

  handleImgChange(e) {
    let val = e.target.value;
    this.props.copyImgURLInput(val);
  }

  handleTagLineChange(e) {
    let val = e.target.value;
    this.props.copyTagLineInput(val);
  }

  handleCreateCardClick() {
    const { twitterIMG, imgURL, tagLine, creatCard, userId } = this.props;
    const newCard = { imgURL, tagLine, userId }
    creatCard(newCard);
  }

  handleRemoveCardClick(card) {
    this.props.removeCard(card);
  }

  render() {
    return (
      <div className="container">
        <Profile cards={this.props.cards}
                 imgURL={this.props.imgURL}
                 handleImgChange={ this.handleImgChange.bind(this) }
                 handleTagLineChange={ this.handleTagLineChange.bind(this) }
                 handleCreateCardClick={ this.handleCreateCardClick.bind(this)}
                 handleRemoveCardClick={ this.handleRemoveCardClick.bind(this)}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards.cards,
    imgURL: state.cards.newCardImgUrl,
    tagLine: state.cards.newCardTagLine,
    userId: state.user.userId
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCards,
    copyImgURLInput,
    copyTagLineInput,
    removeCard,
    creatCard
   }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProfileContainer);
