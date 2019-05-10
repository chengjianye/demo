import React, { Component } from 'react'
import SearchTop from 'components/searchTop'
import axios from 'axios';
import { connect } from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchList: [],
            newArr: []
        }
    }

    componentDidMount() {
        axios.get('/searchList').then(res => {
            this.setState({
                searchList: res.data
            })
        })
    }

    handleChange(e) {
        const { searchList } = this.state;
        const inpVal = e.target.value;
        let temArr = searchList.filter((item, index) => {
            return item.name.indexOf(inpVal) !== -1
        })
        this.setState({
            newArr: temArr
        })
    }

    addList(product, index) {
        const { addList, searchList } = this.props;
        addList(product, index, searchList)
    }
    render() {
        const { newArr } = this.state;
        return <div className='SearchWraper'>
            <SearchTop />
            <form>
                <input type="text" placeholder='搜索' onChange={(e) => {
                    this.handleChange(e)
                }} />
            </form>
            <div className='List'>
                {
                    newArr.length > 0 && newArr.map((item, index) => {
                        return <div key={index} className='lis'>
                            <p>{item.name}</p>
                            <p>{item.num}</p>
                            <p onClick={() => {
                                this.addList(item, index)
                            }}>{item.flag ? '已添加' : '添加'}</p>
                        </div>
                    })
                }

            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.SearchReducers
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList(product, index, searchList) {
            searchList.push(product)
            searchList[index].flag = true
            dispatch({ type: 'ADD', payload: searchList })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
7