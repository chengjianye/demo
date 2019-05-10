import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BusinessTop extends Component {
    render() {
        return <div className='businessTop'>
            <div className='businessBack'>
                <i className='iconfont icon-xiangzuo'></i>
                <Link to='home'>
                    <h3>返回</h3>
                </Link>
            </div>
            <div className='businessCenter'>
                业务中心
                </div>
        </div>
    }
}

export default BusinessTop