import React, { Component } from 'react';
import Card from '../CardComponent/Card';

class Home extends Component {


  renderCards() {
    console.log(this.props.cards);
    if(this.props.cards.length < 1) {
      return (
        <div className="col-md-12">No cards created yet.</div>
      )
    }
    return this.props.cards.map((card, index) => {
      return <Card key={index} card={card}
                   />
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
