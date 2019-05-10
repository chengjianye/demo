import React, { Component } from 'react'
import axios from 'axios';
import Mock from '../mock/mock'
import { connect } from 'react-redux';
import Header from 'components/header'
import Footer from 'components/footer'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newArr: []
        }
    }
    componentDidMount() {
        axios.get('/homeList').then(res => {
            const { update } = this.props
            update(res.data)
        })
    }

    handleClick() {
        const { homeList, update } = this.props
        homeList.sort((a, b) => {
            return a.price > b.price
        })
        update(homeList)
    }

    handleClickKm() {
        const { homeList, update } = this.props
        homeList.sort((a, b) => {
            return a.km > b.km
        })

        update(homeList)
    }

    handleChange(e) {
        const { newArr } = this.state
        const { homeList } = this.props
        let inpVal = e.target.value;
        if (inpVal.length) {
            let oldArr = homeList.filter((item) => {
                return item.tit.indexOf(inpVal) !== -1
            })
            this.setState({
                newArr: oldArr
            })
        } else {
            this.setState({
                newArr: []
            })
        }

    }
    render() {
        const { homeList } = this.props 
        const { newArr } = this.state;

        return (
            <div className='homeWraper'>
                <Header />
                <div className='homeCenter'>
                    <input type="text" onChange={(e) => {
                        this.handleChange(e)
                    }} />
                    <div className='homeTop'>
                        <ul>
                            <li>综合排序</li>
                            <li onClick={() => {
                                this.handleClick()
                            }}>销量最高</li>
                            <li onClick={() => {
                                this.handleClickKm()
                            }}>距离最近</li>
                            <li>筛选</li>
                        </ul>
                    </div>
                    <div className='homeList'>
                        {
                            homeList.length && homeList.map((item, index) => {
                                return <dl key={index} onClick={() => {
                                    this.props.api.history.push({
                                        pathname: `/detail/${item.id}`
                                    })
                                }}>
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
                    <div className='homeList'>
                        {
                            newArr.length > 0 && newArr.map((item, index) => {
                                return <dl key={index} onClick={() => {
                                    this.props.api.history.push({
                                        pathname: `/detail/${item.id}`
                                    })
                                }}  >
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
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.homeReducers
}

const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            dispatch({ type: 'UPDATE', payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
