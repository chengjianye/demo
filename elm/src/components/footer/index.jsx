import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return <footer>
            <ul>
                <li><Link to='/home'>外卖</Link></li>
                <li>订单</li>
                <li>我的</li>
            </ul>
        </footer>
    }
}

export default Footer