import React, { Component } from 'react';
import EditTop from 'components/editTop'
import axios from 'axios'
import { connect } from 'react-redux';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editLists: []
        }
    }
    componentDidMount() {

        axios.get('/getEdit').then(res => {
            this.setState({
                editLists: res.data
            })
        })
    }

    addEdit(editLists) {
        const { editList, addEdit } = this.props
        addEdit(editLists, editList)
    }

    delEdit(index) {
        const { editList, delEdit } = this.props
        delEdit(editList,index)
    }
    render() {
        const { editLists } = this.state;
        const { editList } = this.props
        return <div className='editWrap'>
            <EditTop />
            <div className='center'>
                <div className='MY'>我的应用</div>
                <div className='editList'>
                    <ul>
                        {
                            editList.length && editList.map((item, index) => {
                                return <li key={index}>
                                    <i className='iconfont icon-tengxunweibo21'></i>
                                    <span onClick={() => {
                                        this.delEdit(item.cont,index)
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
                            editLists.length && editLists.map((item, index) => {
                                return <li key={index}>
                                    <i className={item.icon}></i>
                                    <span>-</span>
                                    <span>{item.cont}</span>
                                    <span onClick={() => {
                                        this.addEdit(item)
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
    return state.EditReducers
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEdit(payload, editList) {
            editList.push(payload)
            dispatch({ type: 'ADDEDIT', payload: editList })
        },
        delEdit(editList,index) {
            editList.splice(index, 1)
            dispatch({ type: 'DELEDIT', payload: editList })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)