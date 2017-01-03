import React, { Component } from 'react';
require('./styles-card.scss');

class Card extends Component {
  constructor(props) {
    super(props);
  }

  renderCard(view, card) {
    const userId = this.props.userID;
    switch(view) {
      case 'read-write':
        return(
          <div  className="pin">
            <div>
              <img src={card.imgURL} />
              <p>{ card.tagLine }</p>
              {/* <h5 style={ Styles.tagLine }>{ card.tagLine }</h5> */}
              <div>
                <div className="card-like-btn">
                  <a onClick={() => {this.props.handleLikeClick(card)} }  className="btn btn-primary btn-xs">Like {card.likes.length}</a>
                </div>
                <div className="card-avatar">
                  <img onClick={() => { this.props.handleGetUserCards(card) }} src={ card.twitterIMG } />
                </div>
              </div>
            </div>
          </div>
        )
      case 'read-only':
        return (
          <div className="pin">
              <img src={card.imgURL} />
              <p className="red" >{card.tagLine}</p>
              <div>
                <div className="card-like-btn disable-click">
                  <a className="btn btn-primary btn-xs red">Like {card.likes.length}</a>
                </div>
                <div className="card-avatar disable-click">
                  <img src={ card.twitterIMG } />
                </div>
              </div>
          </div>
        )
      default:
        return (
          <div  className="pin">
            <div>
              <button onClick={() => {this.props.handleRemoveCardClick(card)}} type="button" className="close">&times;</button>
              <img src={card.imgURL} />
              <p>{card.tagLine}</p>
              {/* <h5 style={ Styles.tagLine }>{ card.tagLine }</h5> */}
              <img src={ card.twitterID } />
            </div>
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
