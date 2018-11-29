import React, { Component } from 'react';
import Nav from './nav'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="headerLeft">
          Real Estate
        </div>
        <div id="headerRight">
          <h2 id="headerBanner">"Find your home at home."</h2>
          <Nav checkForToken={this.props.checkForToken}/>
        </div>
      </div>
    );
  }
}

export default Header;
