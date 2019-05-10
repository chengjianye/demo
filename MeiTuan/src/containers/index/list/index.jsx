import React, { Component } from 'react';
import ShopRight from './shopRight';
import axios from 'axios';

class ShopLeft extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shopCarList: [],
            id: 0
        }
        this.getID = this.getID.bind(this)
    }
    componentDidMount() {
        axios.get('/getShopCarLeft').then((res) => {
            this.setState({
                shopCarList: res.data
            })
        })
    }
    getID(id) {
        this.setState({
            id: id
        })
    }
    render() {
        const { shopCarList, id } = this.state;
        return <div className='shop_wapper'>
            <div className='shopLeft'>
                {
                    shopCarList.length && shopCarList.map((item, index) => {
                        return <ul key={item.id}>
                            <li onClick={() => {
                                this.getID(item.id)
                            }}>{item.name}</li>
                        </ul>
                    })
                }
            </div>
            <div className='shopRight'>
                <ShopRight id={id} />
            </div>
        </div>
    }
}

export default ShopLeft