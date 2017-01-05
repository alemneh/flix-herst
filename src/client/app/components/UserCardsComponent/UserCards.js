import React, { PropTypes } from 'react';
import Card from '../CardComponent/Card';

const UserCards = ({userCards, handleLikeClick, isLoggedIn}) => {


  const renderCards = () => {
    const view = isLoggedIn ? 'read-write' : 'read-only';
    if(userCards.length < 1) {
      return (
        <div className="col-md-12">No cards created yet.</div>
      )
    }
    return userCards.map((card, index) => {
      return <Card key={index} card={card} view={view}
                   handleLikeClick={ handleLikeClick }/>
    })
  }

  return (
    <div id="wrapper">
    <h1>User's Cards</h1><hr />
      <div id="columns">
        { renderCards() }
      </div>
    </div>
  )

}

UserCards.propTypes = {
  userCards: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.string.isRequired,
  handleLikeClick: PropTypes.func.isRequired
}


export default UserCards;
