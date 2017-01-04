import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../components/NavComponent/Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { logOut } from '../../actions/userAction';

class NavContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    // this.checkLogIn();
  }

  checkLogIn() {
    axios.get(process.env.URL + '/isLoggedIn')
      .then((res) => {
        console.log(res.data.user);
        this.setState({
          isLoggedIn: res.data.user
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleLogoutClick() {
    console.log('hit');
    this.props.logOut();
    // axios.get(process.env.URL + '/logout')
    //   .then((res) => {
    //     browserHistory.push('/');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }

  handleLoginClick() {
    console.log('hit');
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
  return bindActionCreators({ logOut }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NavContainer);
