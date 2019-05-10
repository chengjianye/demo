import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShopCar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            summary: 0
        }
    }
    plus(index) {
        const { shopCarList, plus } = this.props
        shopCarList[index].count++
        this.computed()
        plus(shopCarList)
    }

    minus(index) {
        const { shopCarList, minus } = this.props
        if (shopCarList[index].count < 1) return
        shopCarList[index].count--
        this.computed()
        minus(shopCarList)
    }

    computed() {
        const { shopCarList } = this.props
        let tot = 0
        let sum = 0
        shopCarList.forEach(item => {
            if (item.isCheck) {
                sum += item.price * item.count
                tot += item.count
            }
        })

        this.setState({
            summary: sum,
            total: tot
        })
    }
    render() {
        const { total, summary } = this.state
        const { shopCarList, checked, update } = this.props

        return <div className='shopcarWapper'>
            <div className='checkall'>
                <input type="checkbox" id='checkAll' onChange={(e) => {
                    const isCheck = e.target.checked;
                    shopCarList.forEach((item) => {
                        item.isCheck = isCheck
                    })
                    this.computed()
                    update(shopCarList)
                }} />
                <label htmlFor="checkAll">
                    全选/反选
                </label>
            </div>
            {
                shopCarList.length && shopCarList.map((item, index) => {
                    return <div key={index}>
                        <input type="checkbox" checked={item.isCheck} onChange={(e) => {
                            shopCarList[index].isCheck = e.target.checked
                            this.computed()
                            checked(shopCarList)
                        }} />
                        <dl>
                            <dt><img src={item.img} alt="" /></dt>
                            <dd>
                                <h3>{item.name}</h3>
                                <p>{item.from}</p>
                                <p>￥{item.price}</p>
                                <p>
                                    <span onClick={() => {
                                        this.minus(index)
                                    }}>-</span>
                                    <span>{item.count}</span>
                                    <span onClick={() => {
                                        this.plus(index)
                                    }}>+</span>
                                </p>
                            </dd>
                        </dl>
                    </div>
                })
            }
            <div className='big'>
                <div className='total'>总数：{total}件</div>
                <div className='summary'>总价：￥{summary}</div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.ShopCarReducers
}

const mapDisPatchToProps = (dispatch) => {
    return {
        plus(payload) {
            dispatch({ type: 'PLUS', payload })
        },
        minus(payload) {
            dispatch({ type: 'MINUS', payload })
        },
        checked(payload) {
            dispatch({ type: 'CHECKED', payload })
        },
        update(payload) {
            dispatch({ type: 'UPDATE', payload })
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(ShopCar)