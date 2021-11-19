import React from 'react';
import { Row, Col, Typography, Space, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

export function DoneVoteCard(props) {
    const first_name = props.value['value1']
    const last_name = props.value['value2']
    const puck = props.value['value3']
    const score = props.value['value4']
    return (

        <Card style={{ width: 1200 }}>

            <Row>
                
                
            </Row>
 
            <Row>
            <Col span={4} >
                {/* <svg xmlns="http://www.w3.org/2000/svg">
                    <circle cx="70" cy="70" r="50" fill="red" />
                </svg> */}
                <div class ="circle"></div>
             
            </Col>
           
            <Col span={5} >
            <Avatar 
                size={144} 
                icon={<UserOutlined/>}
                justify = "end"
                
            />
            </Col>
            
            <Col span={9} flex>
            <Space direction="vertical" size={6}>
            <br/>
            <Title level={3}>{first_name} {last_name}</Title>
            
            </Space>
            </Col>
            
            <Col span={6} >
            <Space direction="vertical" size={6}>
            <br/>
            <Title level={3}>{puck}</Title>
            </Space>
            </Col>
            
            </Row>

        </Card>
      
    )
}