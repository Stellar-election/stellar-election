import React from 'react';
import { Row, Typography, Space, Button } from 'antd';
import { CandidateCard } from './VoteCard';

const { Title } = Typography;

export function Vote(props) {
    const dat = props.newCandidateInfo;
    const data = [{'value1':'Chayanan','value2':'na east anglia','value3':'Puckard','value4':'100'}, {'value1':'Owliyong','value2':'Mongbang','value3':'Puckawatto','value4':'9999999'}]
    return (
        <div>
            <Row justify="center">
                <Title level={2}>ท่านต้องการลงคะแนนให้ผู้สมัครเลือกตั้งท่านใด</Title>
            </Row>

            <Row justify="center">
                <Space direction="vertical" size = "middle">
                    {data.map((value,index) =>{
                    return <CandidateCard key={index}  value={value}/>
                    })}
                </Space>
            </Row>
            <br/><br/>
            
        </div>
    )
}