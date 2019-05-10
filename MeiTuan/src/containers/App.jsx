import React, { Component } from 'react';
import Header from 'components/header'
import RouteView from 'router'
import { HashRouter as Router } from 'react-router-dom'

import 'common/css/style.scss'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Router>
          <RouteView />
        </Router>
      </div>
    );
  }
}

export default App;
