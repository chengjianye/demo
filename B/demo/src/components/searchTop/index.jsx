import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div className='searchTop'>
                <h3><Link to='/home'>返回</Link></h3>
                <p>股票添加</p>
            </div>
        )
    }
}

export default Layout
