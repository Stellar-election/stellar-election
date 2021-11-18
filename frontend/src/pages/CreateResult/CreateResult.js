import React from 'react';
import { Row, Typography, Space, Button } from 'antd';
import { Info } from '../ElectionInfo/Info';

const { Title } = Typography;

export function CreateResult(props) {
    const data = props.newCandidateInfo
    return (
        <div>
            <Row justify="center">
                <Title level={2}>ผลการสร้าง</Title>
            </Row>

            <Row justify="center">
                <Space direction="vertical" size = "middle">
                    {data.map((value,index) =>{
                        return <Info key={index} index={index} value={value}/>
                    })}
                </Space>
            </Row>
            <br/><br/>
            <Row justify="center" align="bottom">
                <Button type="primary" href="/create" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "100px"}}>
                    ตกลง
                </Button>
            </Row>
        </div>
    )
}