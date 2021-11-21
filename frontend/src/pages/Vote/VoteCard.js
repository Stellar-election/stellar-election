import React from 'react';
import { Row, Col, Typography, Space, Card, Avatar,Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {circle} from './Vote.css'
const { Title } = Typography;


export function CandidateCard(props) {
    const first_name = props.value['value1']
    const last_name = props.value['value2']
    const puck = props.value['value3']
    const index = props.value['value5']
    return (
        <div  onclick="location.href='DoneVote.html';">
        <Card style={{ width: 1200 }}  >
            
        
            <Row>
                
            <Col span={4} >
                <br></br>
                {/* <Button class="button button5" type="primary" href="/donevote" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "10px",width: "150px"}}>
                   {index}
                </Button> */}
                <a class="btn" href="/donevote"><i class="ion-ios-arrow-down"></i></a>
             
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
        </div>
      
    )
}