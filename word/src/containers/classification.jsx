import React, { Component } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import axios from 'axios';

class classification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TypeList: []
        }
    }

    componentDidMount() {
        axios.get('/typeList').then(res => {
            this.setState({
                TypeList: res.data
            })
        })
    }

    render() {
        const { TypeList } = this.state
        return <div className='classIfiWriper'>
            <Header />
            <div className='List'>
                <div className='Imported'>
                    <h2>进口品牌</h2>
                    <ul>
                        {
                            TypeList.length && TypeList.map((item, index) => {
                                return <li key={index}>
                                    <p><img src={item.img} alt="" /></p>
                                    <span>{item.title}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='Commonly'>
                    <h2>常用品牌</h2>
                    <ul>
                        {
                            TypeList.length && TypeList.map((item, index) => {
                                return <li key={index}>
                                    <p><img src={item.img} alt="" /></p>
                                    <span>{item.title}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    }
}


export default classification
