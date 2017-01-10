import React, { Component } from 'react';
import axios from 'axios';
import NavContainer from './containers/NavContainer/Nav';
import Footer from './components/FooterComponent/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { fetchUserId } from './actions/userAction';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchUserId();
    this.checkLoggIn();
  }



  checkLoggIn() {
    if(this.props.userId) return;
    browserHistory.push('/');
  }


  render() {
    return (
      <div>
        <NavContainer />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.userId
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUserId}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
