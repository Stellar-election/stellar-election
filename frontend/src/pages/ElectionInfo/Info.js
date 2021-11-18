import React from 'react';
import { Row, Col, Typography, Space, Card } from 'antd';

export function Info(props) {
    const first_name = props.value['firstName'];
    const last_name = props.value['lastName'];
    const party = props.value['party'];
    const address = props.value['address'];
    const nationalId = props.value['nationalId']
    const index  = props.index + 1;

    return (
        <>
            {address != null &&
                <Card style={{ width: 900 }}>
                    <Row>
                        <Col span={6}>  
                            <Typography level = {5}>{index}. ชื่อ {first_name}</Typography>
                        </Col>

                        <Col span={6}>
                            <Typography level = {5}>นามสกุล {last_name}</Typography>
                        </Col>

                        <Col span={6}>
                            <Typography level = {5}>{nationalId}</Typography>
                        </Col>

                        <Col span={6}>
                            <Typography level = {5}>{party}</Typography>
                        </Col>
                    </Row>
                    <br/>
                    
                    <Row>
                        <Typography level = {5}>Address: {address}</Typography>  
                    </Row>
                </Card>
            }
            {address == null &&
                <Card style={{ width: 900 }}>
                    
                    <Row>
                        <Col span={6}>  
                            <Typography level = {5}>{index}. ชื่อ {first_name}</Typography>
                        </Col>

                        <Col span={6}>
                            <Typography level = {5}>นามสกุล {last_name}</Typography>
                        </Col>

                        <Col span={6}>
                            <Typography level = {5}>{nationalId}</Typography>
                        </Col>

                        <Col span={6}>
                            <Typography level = {5}>{party}</Typography>
                        </Col>
                    </Row>
                    
                </Card>
            }
        </>
    )
}