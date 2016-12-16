import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);
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
              <Link to="/"><a className="navbar-brand" href="#">Flix-Herst</a></Link>
            </div>

            <div className="navbar-collapse collapse in" id="bs-example-navbar-collapse-1" aria-expanded="true">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Profile <span className="sr-only">(current)</span></a></li>
                <li><a href="#">All Cards</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/auth/twitter">Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}

export default Nav;
