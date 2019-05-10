import React, { Component } from 'react';
import Img from 'common/img/1.png';
import Img1 from 'common/img/2.png';

class Header extends Component {
    render() {
        return <header>
            <div className='Htop'>
                <p>
                    <i className='iconfont icon-daishouhuo-01'></i>
                    <span>机动车</span>
                </p>
                <p>
                    <img src={Img} alt="" />
                </p>
                <p>
                    <i className='iconfont icon-wode'></i>
                    <span>我的</span>
                </p>
            </div>
            <div className='Hfoot'>
                <p>
                    <i className='iconfont icon-wodedingdan'></i>
                    <span>驾驶证</span>
                </p>
                <p>
                    <img src={Img1} alt="" />
                </p>
                <p>
                    <i className='iconfont icon-xinxi'></i>
                    <span>消息</span>
                </p>
            </div>
        </header>
    }
}

export default Header