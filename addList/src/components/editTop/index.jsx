import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Edit extends Component {
    render() {
        return <div className='editTop'>
            <p>
                <Link to='/business'>
                    取消
                </Link>
            </p>
            <p>我的应用编辑</p>
            <p>完成</p>
        </div>
    }
}

export default Edit