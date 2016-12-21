import React, { Component } from 'react';
import Card from '../CardComponent/AllCard';

class UserCards extends Component {
  constructor(props) {
    super(props);
  }

  renderCards() {
    if(this.props.userCards.length < 1) {
      return (
        <div className="col-md-12">No cards created yet.</div>
      )
    }
    return this.props.userCards.map((card, index) => {
      return <Card key={index} card={card}
                   handleLikeClick={ this.props.handleLikeClick }/>
    })
  }

  render() {
    return (
      <div className="container">
        { this.renderCards() }
      </div>
    )
  }
}


export default UserCards;
