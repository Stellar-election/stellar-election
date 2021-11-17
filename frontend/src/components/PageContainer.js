import { Layout, Menu } from 'antd';
import './PageContainer.css';

const { Header, Content, Footer } = Layout;

export default function PageContainer(props) {
  return ( 
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key={1}>{`nav ${1}`}</Menu.Item>
          <Menu.Item key={2}>{`nav ${2}`}</Menu.Item>
          <Menu.Item key={3}>{`nav ${3}`}</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 100px', minHeight: '87.6vh'}}>
        {props.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Stellar-Election ©2021 Created by Stellar-Election</Footer>
    </Layout>
  );
}