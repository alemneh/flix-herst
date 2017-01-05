import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../components/NavComponent/Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { logOut, fetchUserId } from '../../actions/userAction';

class NavContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchUserId();
  }

  handleLogoutClick(e) {
    e.preventDefault()
    this.props.logOut();
  }

  handleLoginClick() {
    browserHistory.push('/auth/twitter');
  }

  render() {
    console.log(this.props.userId);
    return(
      <div>
        <Nav handleLogoutClick={ this.handleLogoutClick.bind(this) }
             isLoggedIn={ this.props.userId }/>
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
  return bindActionCreators({ logOut, fetchUserId }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NavContainer);
