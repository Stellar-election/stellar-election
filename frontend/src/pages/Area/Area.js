import React from 'react';
import { Row, Typography, Space, Button } from 'antd';
import { Info } from '../ElectionInfo/Info';

const { Title } = Typography;

export function Area(props) {
    const data = props.newCandidateInfo
    return (
        <div>
            <Row justify="center">
                <Title level={2}>การเลือกตั้งที่ท่านมีสิทธิ์ในการลงคะแนน</Title>
            </Row>
            <br/><br/>
            <Row justify="center" align="bottom">
                <Button type="primary" href="/create" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "300px"}}>
                    1 การเลือกตั้ง สส กทม เขต 1 
                </Button>
            </Row>
            <br/><br/>
            <Row justify="center" align="bottom">
                <Button type="primary" href="/create" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "300px"}}>
                    2 การเลือกตั้งผู้ว่า กทม 
                </Button>
            </Row>
            <br/><br/>
            
        </div>
    )
}