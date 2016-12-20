import React, { Component } from 'react';
import Card from '../CardComponent/AllCard';

class Home extends Component {


  renderCards() {
    if(this.props.cards.length < 1) {
      return (
        <div className="col-md-12">No cards created yet.</div>
      )
    }
    return this.props.cards.map((card, index) => {
      return <Card key={index} card={card}
                   handleLikeClick={ this.props.handleLikeClick }/>
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>All Cards</h1><hr />
        { this.renderCards() }
      </div>
    )
  }
}

export default Home;
