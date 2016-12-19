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
        <a href="#" className="btn btn-primary btn-xs">Like {card.likes}</a>
      </div>
    )
  }
}

export default Card;
