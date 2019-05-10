import React, { Component } from 'react';
import Layout from 'components/layout'
import { HashRouter as Router } from 'react-router-dom';
import RouteView from 'router'

import 'common/css/style.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Router>
            <div className='wrapper'>
              <RouteView />
            </div>
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
