import HeaderMenu from "../components/Header/HeaderMenu";
import SiderMenu from '../components/SiderMenu';
import LoginLayout from "./LoginLayout";

import {Layout} from 'antd';

const { Header, Content, Sider,Footer } = Layout;

const state = {
  collapsed: false,
};

const onCollapse = collapsed => {
  console.log(collapsed);
  this.setState({ collapsed });
};

function BasicLayout(props) {
  if (props.location.pathname === '/login') {
    return <LoginLayout>{ props.children }</LoginLayout>
  }

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <HeaderMenu/>
        </Header>
        <Layout>
          <Sider style={{background:'#fff'}} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <SiderMenu/>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 240,
              }}
            >
              { props.children }
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </Layout>

    </>
  );
}

export default BasicLayout;
