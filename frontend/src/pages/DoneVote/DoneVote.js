import React from 'react';
import { Row, Typography, Space, Button } from 'antd';
import { DoneVoteCard } from './DoneVoteCard';

const { Title } = Typography;

export function DoneVote(props) {
    const dat = props.newCandidateInfo;
    const data = {'value1':'Chayanan','value2':'na east anglia','value3':'Puckard','value4':'100'}
    return (
        <div>
            <Row justify="center">
                <Title level={2}>ท่านได้ลงคะแนนให้</Title>
            </Row>

            <Row justify="center">
                <Space direction="vertical" size = "middle">       
                   <DoneVoteCard  value={data}/>  
                </Space>
            </Row>
            <br/><br/><br/><br/>
            <Row justify="center" align="bottom">
                <Button type="primary" href="/create" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "10px",width: "300px"}}>
                    ตกลง
                </Button>
            </Row>
            <br/><br/>
            
        </div>
    )
}