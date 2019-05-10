import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return <footer>
            <ul>
                <li><Link to='/home'>首页</Link></li>
                <li><Link to='/classification'>分类</Link></li>
                <li><Link to='/PersonalCenter'>个人中心</Link></li>
            </ul>
        </footer>
    }
}

export default Footer