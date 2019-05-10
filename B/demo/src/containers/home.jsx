import React, { Component } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        const { searchList } = this.props;
        return <div className='homeWraper'>
            <Header />
            <div className='homeCenter'>
                <div className='homeTop'>
                    <ul>
                        <li>泸2679.11</li>
                        <li>资金</li>
                        <li>新闻</li>
                        <li>公告</li>
                        <li>资产</li>
                    </ul>
                </div>

                <div className='homeContent'>
                    <div className='ContentTop'>
                        <ul>
                            <li>编辑</li>
                            <li>最新</li>
                            <li>涨幅</li>
                            <li>涨跌</li>
                        </ul>
                    </div>

                    <div className='ContentAdd'>
                        <div className='homeList'>
                            {
                                searchList.length && searchList.map((item, index) => {
                                    return <div key={index} className='lis'>
                                        <p>{item.name}</p>
                                        <p>{item.num}</p>
                                        <p>{item.add}</p>
                                    </div>
                                })
                            }
                        </div>
                        <div className='add'>
                            <Link to='/search'>
                                <p>+</p>
                            </Link>
                            <span>暂无股票,请添加</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state.SearchReducers
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList(product, searchList) {
            searchList.push(product)
            dispatch({ type: 'ADD', payload: searchList })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
