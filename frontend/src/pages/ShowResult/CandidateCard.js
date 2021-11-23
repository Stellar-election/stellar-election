import React from 'react';
import {Avatar, Card, Col, Row, Space, Typography} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const {Title} = Typography;

export function CandidateCard(props) {
    const first_name = props.value['value1']
    const last_name = props.value['value2']
    const party = props.value['value3']
    const score = props.value['value4']
    return (

        <Card style={{width: 800}}>
            <Row>
                <Col span={1}>
                </Col>
                <Col span={7}>
                    <Avatar
                        size={144}
                        icon={<UserOutlined/>}
                        justify="end"

                    />
                </Col>

                <Col span={10} flex>
                    <Space direction="vertical" size={6}>
                        <br/>
                        <Title level={3}>{first_name} {last_name}</Title>
                        <Title level={3}>{party}</Title>
                    </Space>
                </Col>

                <Col span={6}>
                    <Space direction="vertical" size={6}>
                        <br/>
                        <Title level={3}>{score} คะแนน</Title>
                    </Space>
                </Col>

            </Row>

        </Card>

    )
}