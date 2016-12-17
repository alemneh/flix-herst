import React, { Component } from 'react';

class Profile extends Component {

  renderCards() {
    if(this.props.cards.length) {
      return (
        <div>No cards created yet.</div>
      )
    }
    this.props.cards.map((card, index) => {
      return <Card key={index} card={card} />
    })
  }
  render() {
    return (
      <div className="container">
        <h1>Profile</h1><hr />
        <button>Create New Card</button>
        <div className="row">
          { this.renderCards() }
        </div>
      </div>
    )
  }
}


export default Profile;
