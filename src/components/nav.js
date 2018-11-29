import React, { Component } from 'react';
import AuthService from '../services'


class Nav extends Component {
  constructor(props){
    super(props)

    this.auth = new AuthService()
    this.state = {
      signedIn: '',
    }
  }

  render() {
    return (
      <div id="navBar">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">Home</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">About<span className="sr-only">(current)</span></a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="/apartments/new">New</a></li>
                <li><a href="/register">Join</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                {this.state.signedIn && <li><a href="/login">Sign Out</a></li>}
                {!this.state.signedIn && <li><a href="/login">Login</a></li>}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  componentDidMount() {
    let { signedIn } = this.state;
    signedIn = this.auth.loggedIn();
    this.setState({signedIn})
  }
}

export default Nav;
