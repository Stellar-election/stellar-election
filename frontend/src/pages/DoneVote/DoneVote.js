import React, {useContext} from 'react';
import { Row, Typography, Space, Button } from 'antd';
import { DoneVoteCard } from './DoneVoteCard';
import {VoteContext} from "../../store/voteStore";

const { Title } = Typography;

export function DoneVote({data}) {
    const { vote } = useContext(VoteContext)
    const VoteResult = vote.voteSelect
    const selectedCandidate = data.selectedCandidate
    
    return (
        <div>
            <Row justify="center">
                <Title level={2}>ท่านได้ลงคะแนนให้</Title>
            </Row>
            <Row justify="center">
                <Space direction="vertical" size = "middle">       
                   <DoneVoteCard  selectedCandidate={selectedCandidate}/>  
                </Space>
            </Row>
            <br/><br/><br/><br/>
            <Row justify="center" align="bottom">
                <Button type="primary" href="/" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "10px",width: "300px"}}>
                    ตกลง
                </Button>
            </Row>
            <br/><br/>
            
        </div>
    )
}