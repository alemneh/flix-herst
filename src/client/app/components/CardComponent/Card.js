import React, { Component } from 'react';
import Styles from './styles';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  renderCard(view, card) {
    switch(view) {
      case 'read-write':
        return(
          <div style={ Styles.card} className="card">
            <img src={card.imgURL} />
            <h5 style={ Styles.tagLine }>{ card.tagLine }</h5>
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
      case 'read-only':
        return (
          <div style={ Styles.card} className="card">
            <img src={card.imgURL} />
            <h5 style={ Styles.tagLine }>{ card.tagLine }</h5>
            <div>
              <div className="card-like-btn" >
                <a style={Styles.notAllowed}  className="btn btn-primary btn-xs">Like {card.likes.length}</a>
              </div>
              <div className="card-avatar" style={Styles.notAllowed}>
                <img src={ card.twitterIMG } />
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div style={ Styles.card} className="card">
            <button onClick={() => {this.props.handleRemoveCardClick(card)}} type="button" className="close">&times;</button>
            <img src={card.imgURL} />
            <h5 style={ Styles.tagLine }>{ card.tagLine }</h5>
            <img src={ card.twitterID } />
          </div>
        )
    }
  }

  render() {
    const card = this.props.card;
    const view = this.props.view;
    return (
      <div>
        { this.renderCard(view, card) }
      </div>
    )
  }
}

export default Card;
