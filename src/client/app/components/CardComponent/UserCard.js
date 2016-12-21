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
        <button onClick={() => {this.props.handleRemoveCardClick(card)}} type="button" className="close">&times;</button>
        <img src={card.imgURL} />
        <h2>{ card.tagLine }</h2>
        <img src={ card.twitterID } />
      </div>
    )
  }
}

export default Card;
