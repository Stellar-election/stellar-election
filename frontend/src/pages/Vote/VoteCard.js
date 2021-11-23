import React from 'react';
import {Avatar, Card, Col, Row, Space, Typography} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import styled from "styled-components";

const {Title} = Typography;


export function CandidateCard({value, index}) {
    const first_name = value['first_name']
    const last_name = value['last_name']
    const party = value['party']

    return (
        <div onclick="location.href='DoneVote.html';">
            <Card style={{width: 1200}}>


                <Row>

                    <Col span={5}>
                        
                        <Circle>

                            <TextOnCircle level={1}>{index+1}</TextOnCircle>

                        </Circle>

                    </Col>

                    <Col span={5}>
                        <Avatar
                            size={144}
                            icon={<UserOutlined/>}
                            justify="end"

                        />
                    </Col>

                    <Col span={9} flex>
                        <Space direction="vertical" size={6}>
                            <br/>
                            <Title level={3}>{first_name} {last_name}</Title>

                        </Space>
                    </Col>

                    <Col span={5}>
                        <Space direction="vertical" size={6}>
                            <br/>
                            <Title level={3}>{party}</Title>
                        </Space>
                    </Col>

                </Row>

            </Card>
        </div>

    )
}

const Circle = styled.div`
  height: 144px;
  width: 144px;
  background-color: #E97D7D;
  border-radius: 50%;
  margin: auto;
`

const TextOnCircle = styled(Title)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white !important;
`