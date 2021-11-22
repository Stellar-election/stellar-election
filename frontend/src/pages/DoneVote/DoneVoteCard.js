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
                
                <Col span={17} >
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <Title level={60}>{first_name} {last_name}</Title>
                    <Title level={60}>{puck}</Title>
                </Col>
           
            <Col span={1} >
            <Avatar 
                size={500} 
                icon={<UserOutlined/>}
                justify = "end"
                
            />
            </Col>
       
            </Row>

        </Card>
      
    )
}