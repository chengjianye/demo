import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailList: []
        }
    }

    componentDidMount() {
        axios.get('/DetailList', {
            params: {
                id: this.props.api.match.params.id
            }
        }).then(res => {
            this.setState({
                detailList: res.data.DetailList
            })
        })
    }

    render() {
        const { detailList } = this.state;
        return <div className='Detail'>
            <div className='back'><Link to='/home'>返回</Link></div>
            <div className='List'>
                {
                    detailList.length && detailList.map((item, index) => {
                        return <dl key={index} className='homeList'>
                            <dt>
                                <img src={item.img} alt="" />
                            </dt>
                            <dd>
                                <h5>{item.title}</h5>
                                <p>{item.dicr}</p>
                                <p>{item.num}件</p>
                                <p>￥{item.price}</p>
                            </dd>
                        </dl>
                    })
                }
            </div>
        </div>
    }
}


export default Detail
