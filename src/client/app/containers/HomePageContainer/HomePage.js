import React, { Component } from 'react';
import HomePage from '../../components/HomePageComponent/HomePage';

class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  componentWillMount() {
    this.getAllCards();
  }

  getAllCards() {
    axios.get(process.env.URL + '/cards')
      .then((res) => {
        console.log(res);
        this.setState({ cards: res.data.cards });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <HomePage cards={ this.state.cards }/>
      </div>
    )
  }
}

export default HomePageContainer;
