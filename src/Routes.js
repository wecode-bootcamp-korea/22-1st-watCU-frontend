import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// #PAGES
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';

// #COMPONENTS
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={Detail} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default Routes;
