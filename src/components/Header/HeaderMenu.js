import React, {Component} from "react";
import {Menu} from 'antd';
import {Link, withRouter} from 'react-router-dom'

import style from './HeaderMenu.css';

class HeaderMenu extends Component{
    render() {
        const pathname=this.props.history.location.pathname.substr(1)
        return(
            <div id="HeaderMenu">
                <div className={style.logo}>NICE</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/']}
                    selectedKeys={[pathname]}
                    style={{ lineHeight: '64px' }}
                    // onClick={this.handleClick}
                >
                    {/*<Menu.Item key="work"><Link to="/work">业务处理</Link></Menu.Item>*/}
                    {/*<Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>*/}
                    <Menu.Item key="page"><Link to="/page">图片</Link></Menu.Item>
                    <Menu.Item key="counter"><Link to="/counter">计数</Link></Menu.Item>
                    <Menu.Item key="userinfo"><Link to="/userinfo">用户</Link></Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(HeaderMenu);
