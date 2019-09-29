import { Menu, Icon, Button } from 'antd';
import React, {Component} from "react";
import {Link,withRouter} from 'react-router-dom'

const { SubMenu } = Menu;

class SiderMenu extends Component {
    // constructor(props) {
    //         super(props);
    //
    // }
    // setDefaultActiveItem = ({ location }) => {
    //     const { pathname } = location;
    //     this.setState({
    //
    //     })
    // }
    // handleClick=(e)=> {
    //     console.log(this.props.history.location.pathname)
    //     console.log(e)
    //     this.setState()
    // }
    render() {
        const pathname=this.props.history.location.pathname.substr(1)
        return (
            <div style={{ width: 200 }}>
                <Menu
                    defaultSelectedKeys={['/page']}
                    defaultOpenKeys={['sub2']}
                    mode="inline"
                    selectedKeys={[pathname]}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
                        }
                    >
                        <Menu.Item key="page"><Link to="/page">图片</Link></Menu.Item>
                        <Menu.Item key="counter"><Link to="/counter">计数</Link></Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default withRouter(SiderMenu);