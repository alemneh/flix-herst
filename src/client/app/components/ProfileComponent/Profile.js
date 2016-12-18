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
    console.log(this.props.cards);
    if(this.props.cards.length < 1) {
      return (
        <div className="col-md-12">No cards created yet.</div>
      )
    }
    console.log(Card);
    return this.props.cards.map((card, index) => {
      return <Card key={index} card={card} />
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Profile</h1><hr />
        <input type="button" value="Create Card" className="btn btn-success"
                    data-toggle="modal" data-target="#myModal" />

        <div style={Styles.cards} className="row">
          { this.renderCards() }
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
