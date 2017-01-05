import React, { PropTypes } from 'react';
import Card from '../CardComponent/Card';

const Home = ({cards, isLoggedIn, handleLikeClick, handleGetUserCards}) => {


  const renderCards = () => {
    const view = isLoggedIn ? 'read-write' : 'read-only';
    if(cards.length < 1) {
      return (
        <div className="col-md-12">No cards created yet.</div>
      )
    }
    return cards.map((card, index) => {
      return <Card key={index} card={card} view={ view }
                   handleLikeClick={ handleLikeClick }
                   handleGetUserCards={ handleGetUserCards }/>
    })
  }


  return (
    <div id="wrapper">
  	   <div id="columns" >
        { renderCards() }
      </div>
    </div>
  )

}

Home.propType = {
  cards: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.string.isRequired,
  handleLikeClick: PropTypes.func.isRequired,
  handleGetUserCards: PropTypes.func.isRequired
}

export default Home;
