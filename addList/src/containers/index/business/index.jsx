import React, { Component } from 'react';
import BusinessTop from 'components/businessTop';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Business extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: [],
            business: []
        }
    }
    componentDidMount() {
        axios.get('/getNavList').then(res => {
            this.setState({
                navList: res.data
            })
        })

        axios.get('/getBusiness').then(res => {
            this.setState({
                business: res.data
            })
        })
    }
    render() {
        const { navList, business } = this.state
        return <div className='business'>
            <BusinessTop />
            <div className='BusinessCenter'>
                <div className='inp'>
                    <input type="text" placeholder='搜索' />
                </div>
                <div className='nav'>
                    <ul>
                        {
                            navList.length && navList.map((item, index) => {
                                return <li key={index}>{item.nav}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='endit'>
                    <h4>我的应用</h4>
                    <div>
                        <p>aa</p>
                        <span>
                            <Link to='/edit'>
                                编辑
                            </Link>
                        </span>
                    </div>
                </div>
                <div className='car'>
                    <span></span>
                    <h3>机动车业务</h3>
                </div>
                <div className='businessList'>
                    <ul>
                        {
                            business.length && business.map((item, index) => {
                                return <li key={index}>
                                    <i className={item.icon}></i>
                                    <span>{item.cont}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Business