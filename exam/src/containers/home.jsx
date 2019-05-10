import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        const { homeList } = this.props
        if (homeList.length == 0) {
            axios.get('/homeList').then(res => {
                const { update } = this.props
                update(res.data)
            })
        }

    }
    render() {
        const { homeList } = this.props;
        let payCount = 0;
        let incomeCount = 0;
        payCount = homeList.filter((v, i) => {
            return v.type === 'pay'
        }).length;

        incomeCount = homeList.filter((v, i) => {
            return v.type === 'income'
        }).length;

        return <div className='homeWrap'>
            <input type="text" placeholder='输入金额或估值,快速记一笔' />
            <div className='top'>
                <div>
                    送礼{payCount}次
                </div>
                <div>
                    收礼{incomeCount}次
                </div>

            </div>
            {
                homeList.length && homeList.map((item, index) => {
                    return <div className='center' key={index}>
                        <div>
                            <p className={item.type == 'income' ? 'income' : 'pay'}>{item.tou}</p>
                            <h3>{item.name}</h3>
                        </div>
                        <div>
                            <p>{item.time}</p>
                        </div>
                    </div>
                })
            }

            <Link to='next'>
                <div className='add'>
                    +
                </div>
            </Link>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.Bookkeeping
}

const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            dispatch({ type: 'UPDATE', payload })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
