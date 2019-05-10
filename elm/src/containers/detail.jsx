import React, { Component } from 'react'
import axios from 'axios';
import Mock from '../mock/mock'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailList: []
        }
    }

    componentDidMount() {
        axios.get('/detail', {
            data: {
                id: this.props.api.match.params.id
            }
        }).then(res => {
            this.setState({
                detailList: res.data
            })
        })
    }

    render() {
        const { detailList } = this.state;
        return (
            <div className='homeWraper'>
                <div className='homeList'>
                    {
                        detailList.length && detailList.map((item, index) => {
                            return <dl key={index}>
                                <dt><img src={item.img} alt="" /></dt>
                                <dd>
                                    <h3>{item.tit}</h3>
                                    <p>{item.price}￥</p>
                                    <p>{item.km}m</p>
                                </dd>
                            </dl>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Detail
