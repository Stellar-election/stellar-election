import { Layout, Menu, Typography, Row, Col } from 'antd';
import './PageContainer.css';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

export default function PageContainer(props) {
  return ( 
    <Layout className="layout">
      <Header style={{ backgroundColor: "#E97D7D" }}>
        <Title style={{ color: "#FFF", marginTop: '4px'}}>กกต</Title>
      </Header>
      <Content style={{ padding: '32px 100px', minHeight: '87.6vh', backgroundColor: "#FFF" }}>
        {props.children}
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: "#F8E1EA" }}>Stellar-Election ©2021 Created by Stellar-Election</Footer>
    </Layout>
  );
}