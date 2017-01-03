import React, { Component } from 'react';
import axios from 'axios';
import Profile from '../../components/ProfileComponent/Profile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCards, copyTagLineInput, copyImgURLInput } from '../../actions/cardsAction';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      imgURL: '',
      tagLine: '',
      userID: null
    }
  }

  componentWillMount() {
    const userID = localStorage.userID;
    this.props.fetchCards(userID);

  }



  handleImgChange(e) {
    console.log(e.target.value);
    let val = e.target.value;
    this.props.copyImgURLInput(val);
  }

  handleTagLineChange(e) {
    console.log(e.target.value);
    let val = e.target.value;
    this.props.copyTagLineInput(val);
  }

  handleCreateCardClick() {
    // return;
    let cards = this.state.cards;


    axios.post(process.env.URL + '/users/' + this.props.userID + '/cards', {
      tagLine: this.state.tagLine,
      imgURL: this.state.imgURL,
      twitterIMG: this.props.twitterIMG
    })
      .then((res) => {
        cards.push(res.data.newCard);
        this.setState({ cards });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleRemoveCardClick(card) {
    let cards = this.state.cards.filter((c) => c._id != card._id);
    axios.delete(process.env.URL + '/users/' + card._owner + '/cards/' + card._id)
      .then((res) => {
        console.log(res);
        this.setState({ cards });
      })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    return (
      <div className="container">
        <Profile cards={this.props.cards}
                 imgURL={this.props.imgURL}
                 twitterIMG={ this.props.twitterIMG }
                 handleImgChange={ this.handleImgChange.bind(this) }
                 fetchUserCards={ this.fetchUserCards.bind(this) }
                 handleTagLineChange={ this.handleTagLineChange.bind(this) }
                 handleCreateCardClick={ this.handleCreateCardClick.bind(this)}
                 handleRemoveCardClick={ this.handleRemoveCardClick.bind(this)}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards.cards
    imgURL: state.cards.newCardImgUrl
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCards, copyImgURLInput, copyTagLineInput }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProfileContainer);
