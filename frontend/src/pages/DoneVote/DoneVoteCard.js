import React from 'react';
import { Row, Col, Typography, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

export function DoneVoteCard({ selectedCandidate }) {
    const first_name = selectedCandidate['first_name']
    const last_name = selectedCandidate['last_name']
    const party = selectedCandidate['party']
    return (

        <Card style={{ width: 1200 }}>
            <Row>

                <Col span={17} >
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <Title level={60}>{first_name} {last_name}</Title>
                    <Title level={60}>{party}</Title>
                </Col>

                <Col span={1} >
                    <Avatar
                        size={500}
                        icon={<UserOutlined />}
                        justify="end"

                    />
                </Col>

            </Row>

        </Card>

    )
}