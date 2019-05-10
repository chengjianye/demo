import React, { Component } from 'react';
import { HashRouter as Route } from 'react-router-dom';
import RouteView from 'router'

import 'common/css/style.scss'
import 'common/fonts/iconfont.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route>
          <div className='wrapper'>
            <RouteView />
          </div>
        </Route>
      </div>
    );
  }
}

export default App;
