import React, { Component } from 'react'
import EditTop from 'components/editTop'
import axios from 'axios'
import { connect } from 'react-redux';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businessList: []
        }
    }

    componentDidMount() {
        const { update } = this.props

        axios.get('/businessList').then(res => {
            update(res.data)
        })
    }

    addList(product) {
        const { addList, ApplicationList } = this.props
        addList(product, ApplicationList)
    }

    delList(index) {
        const { delList, ApplicationList } = this.props
        delList(index, ApplicationList)
    }
    render() {
        const { ApplicationList, businessList } = this.props
        return <div className='editWrap'>
            <EditTop />
            <div className='center'>
                <div className='MY'>我的应用</div>
                <div className='editList'>
                    <ul>
                        {
                            ApplicationList.length == 0 ? '' : ApplicationList.map((item, index) => {
                                return <li key={index}>
                                    <i className='iconfont icon-tengxunweibo21'></i>
                                    <span onClick={() => {
                                        this.delList(index)
                                    }}>-</span>
                                    <span>{item.cont}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='service'>
                    <div className='serviceTop'>
                        <div>
                            <span></span>
                            <h3>机动车业务</h3>
                            <b>最新实施地方交通资讯</b>
                        </div>
                        <i className='iconfont icon-youjiantou-01'></i>
                    </div>
                </div>
                <div className='editAddList'>
                    <ul>
                        {
                            businessList.length && businessList.map((item, index) => {
                                return <li key={index}>
                                    <i className={item.icon}></i>
                                    <span>-</span>
                                    <span>{item.cont}</span>
                                    <span onClick={() => {
                                        this.addList(item)
                                    }}>+</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.Application
}

const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            dispatch({ type: 'BUSINESS', payload })
        },
        addList(product, ApplicationList) {
            ApplicationList.push(product)
            dispatch({ type: 'ADDLIST', payload: ApplicationList })
        },
        delList(index, ApplicationList) {
            ApplicationList.splice(index, 1)
            dispatch({ type: 'DELLIST', payload: ApplicationList })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
