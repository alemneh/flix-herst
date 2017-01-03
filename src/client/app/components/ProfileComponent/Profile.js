import React, { Component } from 'react';
import Card from '../CardComponent/Card';
import CreateCard from '../CreateCardComponent/CreateCard';
import Styles from './styles';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

componentWillMount() {
}

  renderCards() {
    if(this.props.cards.length < 1) {
      return (
        <div className="col-md-12">No cards created yet.</div>
      )
    }
    return this.props.cards.map((card, index) => {
      return <Card key={index} card={card} view="profile"
                   handleRemoveCardClick={ this.props.handleRemoveCardClick } />
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Profile</h1><hr />
        <input type="button" value="Create Card" className="btn btn-success"
                    data-toggle="modal" data-target="#myModal" />

        <div id="wrapper">
      	   <div id="columns">
              { this.renderCards() }
           </div>
        </div>
        <CreateCard handleImgChange={ this.props.handleImgChange }
                    handleTagLineChange={ this.props.handleTagLineChange }
                    handleCreateCardClick={ this.props.handleCreateCardClick }
                    imgURL={this.props.imgURL}/>
      </div>
    )
  }
}


export default Profile;
