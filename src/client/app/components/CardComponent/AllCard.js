import React, { Component } from 'react';
import Styles from './styles';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card = this.props.card;
    return (
      <div style={ Styles.card} className="col-xs-6 col-md-3 well well-lg">
        <img src={card.imgURL} />
        <h2>{ card.tagLine }</h2>
        <div>
          <div className="card-like-btn">
            <a onClick={() => {this.props.handleLikeClick(card)} }  className="btn btn-primary btn-xs">Like {card.likes.length}</a>
          </div>
          <div className="card-avatar">
            <img onClick={() => { this.props.handleGetUserCards(card) }} src={ card.twitterIMG } />
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
