import React, { Component } from 'react'
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false,
            searchList: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        const inpVal = this.refs.inp.value;
        if (inpVal) {
            this.setState({
                flag: true
            })
        } else {
            this.setState({
                flag: false
            })
        }

    }
    componentDidMount() {
        axios.get('/homeList').then(res => {
            this.setState({
                searchList: res.data
            })
        })
    }
    handleClick(event) {
        const inpVal = this.refs.inp.value;
        console.log(event)
        if (inpVal === '兔头妈妈') {

        } else {
            alert('没数据')
        }
    }

    render() {
        const { flag, searchList } = this.state;
        console.log(searchList)
        return (
            <div className='search'>
                <div className='top'>
                    <form>
                        <input type="text" placeholder='搜索' onChange={() => {
                            this.handleChange()
                        }} ref='inp' value={this.state.value} />

                        <p className={flag ? 'show' : 'hidden'}>
                            <span onClick={() => {
                                this.handleClick()
                            }}>✔</span>
                            <span>×</span>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search