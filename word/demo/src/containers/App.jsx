import React, { Component } from 'react';
import Left from 'components/left'
import Right from 'components/right'
import axios from 'axios';

import 'common/css/style.scss'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftList: [],
      id: 0
    }
    this.getId = this.getId.bind(this)
  }
  componentDidMount() {
    axios('/getLeftList').then((res) => {
      this.setState({
        leftList: res.data
      })
    })
  }
  getId(id) {
    this.setState({
      id: id
    })
  }
  render() {
    const { leftList, id } = this.state;
    return <div className="App">
      <div className="wrap">
        <Left leftList={leftList} getId={this.getId}></Left>
        <Right id={id} />
      </div>
    </div>

  }
}

export default App;
