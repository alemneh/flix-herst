import React, { PropTypes } from 'react';
// require('./styles-card.scss');

const Card = ({
  card,
  view,
  handleLikeClick,
  handleGetUserCards,
  handleRemoveCardClick
}) => {


  const renderCard = (view, card) => {
    switch(view) {
      case 'read-write':
        return(
          <div  className="pin">
            <div>
              <img src={card.imgURL} />
              <p>{ card.tagLine }</p>
              <div>
                <div className="card-like-btn">
                  <a onClick={() => {handleLikeClick(card)} }  className="btn btn-primary btn-xs">Like {card.likes.length}</a>
                </div>
                <div className="card-avatar">
                  <img onClick={() => { handleGetUserCards(card) }} src={ card.twitterIMG } />
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
              <button onClick={() => {handleRemoveCardClick(card)}} type="button" className="close">&times;</button>
              <img src={card.imgURL} />
              <p>{card.tagLine}</p>
              <img src={ card.twitterID } />
            </div>
          </div>
        )
    }
  }

    return (
      <div>
        { renderCard(view, card) }
      </div>
    )

}

Card.propTypes = {
  view: PropTypes.string.isRequired,
  card: PropTypes.object.isRequired,
  handleLikeClick: PropTypes.func,
  handleGetUserCards: PropTypes.func,
  handleRemoveCardClick: PropTypes.func
}

export default Card;
