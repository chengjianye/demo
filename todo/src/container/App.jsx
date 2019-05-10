import React, { Component } from 'react';
import Header from 'components/header/header';
import Layout from 'components/layout';

import 'common/css/style.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
