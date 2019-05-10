import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import RouteView from 'router';

import 'common/css/style.scss'
import 'common/fonts/iconfont.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <RouteView />
        </Router>
      </div>
    );
  }
}

export default App;
