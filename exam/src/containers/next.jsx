import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Next extends Component {

    constructor(props) {
        super(props)
        this.state = {
            obj: {}
        }
    }

    handleChangeMoney(e) {
        const inpVal = e.target.value;
        let { obj } = this.state;
        this.setState({
            obj: {
                ...obj,
                name: inpVal
            }
        })
    }

    handleChangeName(e) {
        const inpVal = e.target.value;
        let { obj } = this.state;
        this.setState({
            obj: {
                ...obj,
                tou: inpVal
            }
        })
    }

    handleChangeBind(e) {
        const inpVal = e.target.value;
        let { obj } = this.state;
        this.setState({
            obj: {
                ...obj,
                time: inpVal
            }
        })
    }

    handleClickComeIn() {
        const { obj } = this.state
        const { income, homeList } = this.props;
        obj.type = 'income'
        this.setState({
            obj
        })
        income(obj, homeList)
    }

    handleClickGoOut() {
        const { obj } = this.state
        const { expenditrue, homeList } = this.props;
        obj.type = 'pay'
        this.setState({
            obj
        })
        expenditrue(obj, homeList)
    }
    render() {
        return (
            <div className='jizhangWraper'>
                <div className='top'>
                    <div>
                        <p>金额</p>
                        <input type="text" placeholder='输入金额' onChange={(e) => {
                            this.handleChangeMoney(e)
                        }} />
                    </div>
                    <div>
                        <p>姓名</p>
                        <input type="text" placeholder='输入姓名' onChange={(e) => {
                            this.handleChangeName(e)
                        }} />
                    </div>
                    <div>
                        <p>事件</p>
                        <input type="text" placeholder='输入事件' onChange={(e) => {
                            this.handleChangeBind(e)
                        }} />
                    </div>
                </div>
                <div className='center'>
                    <ul>
                        <li>送礼</li>
                        <li>生日</li>
                        <li>结婚</li>
                        <li>过节</li>
                        <li>请客</li>
                    </ul>
                </div>
                <div className='fs'>
                    <p>方式</p>
                    <p>现金</p>
                </div>
                <div className='center2'>
                    <ul>
                        <li>送礼</li>
                        <li>生日</li>
                        <li>结婚</li>
                        <li>过节</li>
                        <li>请客</li>
                    </ul>
                </div>
                <div className='fss'>
                    <p>日期</p>
                    <p>备注</p>
                </div>

                <div className='foot'>
                    <button onClick={() => {
                        this.handleClickComeIn()
                    }}><Link to='/home'>收入</Link></button>
                    <button onClick={() => {
                        this.handleClickGoOut()
                    }}><Link to='/home'>支出</Link></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.Bookkeeping
}

const mapDispatchToProps = (dispatch) => {
    return {
        income(obj, homeList) {
            homeList.push(obj)
            dispatch({ type: 'INCOME', payload: homeList })
        },
        expenditrue(obj, homeList) {
            homeList.push(obj)
            dispatch({ type: 'EXPENDITRUE', payload: homeList })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Next)