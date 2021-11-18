import React from 'react';
import { Steps, Row, Col, Typography, Space, Grid, Button, Layout } from 'antd';
import { CandidateCard } from './CandidateCard';

const { Title } = Typography;

export function ShowResult(props) {
    const dat = props.newCandidateInfo;
    const data = [{'value1':'Chayanan','value2':'na east anglia','value3':'Puckard','value4':'100'}, {'value1':'Owliyong','value2':'Mongbang','value3':'Puckawatto','value4':'9999999'}]
    return (
        <div>
            <Row justify="center">
                <Title level={2}>ผลคะแนนการเลือกตั้ง</Title>
            </Row>

            <Row justify="center">
                <Space direction="vertical" size = "middle">
                    {data.map((value,index) =>{
                    return <CandidateCard key={index}  value={value}/>
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