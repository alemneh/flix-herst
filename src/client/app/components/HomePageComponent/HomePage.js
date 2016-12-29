import React, { Component } from 'react';
import Card from '../CardComponent/Card';

class Home extends Component {


  renderCards() {
    const view = this.props.isLoggedIn ? 'read-write' : 'read-only';
    if(this.props.cards.length < 1) {
      return (
        <div className="col-md-12">No cards created yet.</div>
      )
    }
    return this.props.cards.map((card, index) => {
      return <Card key={index} card={card} view={ view }
                   handleLikeClick={ this.props.handleLikeClick }
                   handleGetUserCards={ this.props.handleGetUserCards }/>
    })
  }

  render() {
    const view = this.props.isLoggedIn ? 'read-write' : 'read-only';
    return (
      <div id="wrapper">
    	   <div id="columns" >

          {/* <h1>All Cards</h1><hr /> */}
          { this.renderCards() }
        </div>
      </div>
    )
  }
}

export default Home;
