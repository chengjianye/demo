import React, { Component } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import Img2 from 'common/img/3.png';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeList: []
        }
    }

    componentDidMount() {
        axios.get('/homeList').then(res => {
            this.setState({
                homeList: res.data
            })
        })
    }
    render() {
        const { homeList } = this.state
        
        return <div className='homeWrap'>
            <Header />
            <div className='section'>
                <div className='sTop'>
                    <p>所在城市  徐州</p>
                    <p>2018年11月18日></p>
                </div>
                <div className='secNav'>
                    <ul>
                        {
                            homeList.length && homeList.map((item, index) => {
                                return <li key={index}>
                                    <Link to='/business'>
                                        <i className={item.icon}></i>
                                        <span>{item.tit}</span>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div className='information'>
                    <div className='inforTop'>
                        <div>
                            <span></span>
                            <h3>资讯中心</h3>
                            <b>最新实施地方交通资讯</b>
                        </div>
                        <i className='iconfont icon-youjiantou-01'></i>
                    </div>
                    <div className='inforFoot'>
                        <div className='inforFootLef'>
                            <p>欢迎使用</p>
                            <p>交管1234</p>
                        </div>
                        <div className='inforFootRig'>
                            <img src={Img2} alt="" />
                        </div>
                    </div>
                </div>
                <div className='service'>
                    <div className='serviceTop'>
                        <div>
                            <span></span>
                            <h3>服务中心</h3>
                            <b>最新实施地方交通资讯</b>
                        </div>
                        <i className='iconfont icon-youjiantou-01'></i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    }
}

export default Home
