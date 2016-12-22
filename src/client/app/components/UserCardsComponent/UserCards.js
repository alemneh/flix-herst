import React, { Component } from 'react';
import Card from '../CardComponent/Card';

class UserCards extends Component {
  constructor(props) {
    super(props);
  }

  renderCards() {
    const view = this.props.isLoggedIn ? 'read-write' : 'read-only';
    if(this.props.userCards.length < 1) {
      return (
        <div className="col-md-12">No cards created yet.</div>
      )
    }
    return this.props.userCards.map((card, index) => {
      return <Card key={index} card={card} view={view}
                   handleLikeClick={ this.props.handleLikeClick }/>
    })
  }

  render() {
    return (
      <div className="container">
        <h1>User's Cards</h1><hr />
        { this.renderCards() }
      </div>
    )
  }
}


export default UserCards;
