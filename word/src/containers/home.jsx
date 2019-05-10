import React, { Component } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeList: []
        }
    }

    componentDidMount() {
        axios.get('/homeList').then(res => {
            this.setState({
                homeList: res.data
            })
        })
    }
    render() {
        const { homeList } = this.state;
        return <div className='homeWraper'>
            <Header />
            <div className='List'>
                {
                    homeList.length && homeList.map((item, index) => {
                        return <dl key={index} className='homeList'>
                            <dt>
                                <img src={item.img} alt="" />
                            </dt>
                            <dd>
                                <h5>{item.title}</h5>
                                <p>{item.dicr}</p>
                                <p>{item.num}件</p>
                                <p>￥{item.price}</p>
                                <p onClick={() => {
                                    this.props.api.history.push({
                                        pathname:`/detail/${item.id}`
                                    })
                                }}>马上抢</p>
                            </dd>
                        </dl>
                    })
                }
            </div>
            <Footer />
        </div>
    }
}


export default Home
