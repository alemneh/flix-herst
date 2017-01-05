import React, { Component } from 'react';
import NavItem from '../NavItemComponent/NavItem';
import { Link } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  renderNavLinks() {
    if(!this.props.isLoggedIn) {
      return (
        <div>
          <ul className="nav navbar-nav">
            <NavItem to='/' index={true}>All Cards</NavItem>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href='/auth/twitter' >Login</a></li>
          </ul>
        </div>
      )
    }
    return (
      <div>
        <ul className="nav navbar-nav">
          <NavItem to='/' index={true}>All Cards</NavItem>
          <NavItem to='/profile'>Profile</NavItem>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href='#' onClick={(e) => { this.props.handleLogoutClick(e) }}>Logout</a></li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">Flix-Herst</Link>
            </div>

            <div className="navbar-collapse collapse in" id="bs-example-navbar-collapse-1" aria-expanded="true">
              { this.renderNavLinks() }
            </div>
          </div>
        </nav>
    )
  }
}

export default Nav;
