import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false,
        }
    }

    render() {
        return <header>
            <form>
                <Link to='/search'>
                    <input type="text" placeholder='搜索' ref='inp' />
                </Link>
            </form>
        </header>
    }
}

export default Header