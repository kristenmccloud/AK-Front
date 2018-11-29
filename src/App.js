import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index';
import Apartment from './pages/apartment';
import Login from './pages/login';
import Register from './pages/register';
import Header from './components/header';
import NewApartment from './pages/newApartment'
import EditApartment from './pages/editApartment'
import About from './pages/about'
import AuthService from './services'


class App extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      hasToken: false
    }
  }
  render() {
    return (
      <div id="big">
        <Header checkForToken={this.checkForToken} hasToken={this.state.hasToken}/>
        <Router>
          {(this.auth.loggedIn())
          ?<Switch> //protected paths
            <Route path='/apartments/new' component={NewApartment} /> //protected
            <Route path='/apartments/:id' component={Apartment} />
            <Route path='/login' render={(props) => <Login checkForToken={this.checkForToken}/>} />
            <Route path='/register' component={Register} />
            <Route path='/about' component={About} />
            <Route path='/apartment/:id/edit/' component={EditApartment} /> //protected
            <Route path='/' component={Index} />
          </Switch>

          :<Switch> //public paths
            <Route path='/apartments/new' component={Login} />
            <Route path='/apartments/:id' component={Apartment} />
            <Route path='/login' render={(props) => <Login checkForToken={this.checkForToken}/>} />
            <Route path='/register' component={Register} />
            <Route path='/about' component={About} />
            <Route path='/apartment/:id/edit/' component={Login} />
            <Route path='/' component={Index} />
          </Switch>}
        </Router>
      </div>
    );
  }

checkForToken = () => {
  this.setState({hasToken: this.auth.loggedIn()})
}

}

export default App;
