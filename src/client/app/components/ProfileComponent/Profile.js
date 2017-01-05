import React, { PropTypes } from 'react';
import Card from '../CardComponent/Card';
import CreateCard from '../CreateCardComponent/CreateCard';
import Styles from './styles';

const Profile = ({
  cards,
  imgURL,
  handleRemoveCardClick,
  handleCreateCardClick,
  handleImgChange,
  handleTagLineChange
}) => {



  const renderCards = () => {
    if(cards.length < 1) {
      return (
        <div className="col-md-12">No cards created yet.</div>
      )
    }
    return cards.map((card, index) => {
      return <Card key={index} card={card} view="profile"
                   handleRemoveCardClick={ handleRemoveCardClick } />
    })
  }


  return (
    <div className="container">
      <h1>Profile</h1><hr />
      <input type="button" value="Create Card" className="btn btn-success"
                  data-toggle="modal" data-target="#myModal" />

      <div id="wrapper">
    	   <div id="columns">
            { renderCards() }
         </div>
      </div>
      <CreateCard handleImgChange={ handleImgChange }
                  handleTagLineChange={ handleTagLineChange }
                  handleCreateCardClick={ handleCreateCardClick }
                  imgURL={imgURL}/>
    </div>
  )

}

Profile.propTypes = {
  cards: PropTypes.array.isRequired,
  imgURL: PropTypes.string.isRequired,
  handleImgChange: PropTypes.func.isRequired,
  handleTagLineChange: PropTypes.func.isRequired,
  handleRemoveCardClick: PropTypes.func.isRequired,
  handleCreateCardClick: PropTypes.func.isRequired
}

export default Profile;
