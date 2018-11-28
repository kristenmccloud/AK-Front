import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index';
import Apartment from './pages/apartment';
import Login from './pages/login';
import Register from './pages/register';
import Header from './components/header';


class App extends Component {
  render() {
    return (
      <div id="big">
        <Header />
        <Router>
          <Switch>
            <Route path='/apartments/:id' component={Apartment} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/' component={Index} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
