import React, { Component } from 'react';
import { getProudctRight } from 'api/product'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'store/actions'

class ShopRight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            id: 0
        }
        this._getProudctRight = this._getProudctRight.bind(this)
    }

    componentDidMount() {
        this._getProudctRight()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id
        }, () => {
            this._getProudctRight()
        })
    }

    _getProudctRight() {
        const { id } = this.props
        getProudctRight(id).then(res => {
            this.setState({
                productList: res.data[0].collection
            })
        })
    }

    addToShopCar(product) {
        const { shopCarList, update } = this.props
        update(product, shopCarList)
    }
    render() {
        const { productList } = this.state;
        return <div className='shopList'>
            {
                productList.length && productList.map((item, index) => {
                    return <dl key={index} >
                        <dt><img src={item.img} alt="" /></dt>
                        <dd>
                            <h3>{item.name}</h3>
                            <p>{item.tit}</p>
                            <p className='pushShop'>
                                <span>￥{item.price}</span>
                                <span onClick={() => {
                                    this.addToShopCar(item)
                                    
                                }}>加入购物车</span>
                            </p>
                        </dd>
                    </dl>
                })
            }
            <div className='lookShop'>
                <Link to='/shopcar'>查购物车</Link>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.ShopCarReducers
}

const mapDisPatchToProps = (dispatch) => {
    return {
        update(product, shopCarList) {             
            let temp = shopCarList.filter((item) => {
                console.log(11)
                return item.id === product.id
            })
            if (temp.length < 1) {
                shopCarList.push({...product, count: 1, isCheck: false })
            } else {
                shopCarList.forEach((item, index) => {
                    if (item.id === product.id) {
                         shopCarList[index].count++
                    }
                })
            }
            dispatch(actions.update(shopCarList))
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(ShopRight)