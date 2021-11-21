import React, {useContext} from 'react';
import {Row, Space, Typography} from 'antd';
import {CandidateCard} from './VoteCard';
import {VoteContext} from "../../store/voteStore";

const {Title} = Typography;

export function Vote(props) {
    const {currentState, vote} = useContext(VoteContext)
    const handleClick = (selectId) => {
        vote.setVoteSelect(selectId)
        currentState.setCurrentState(4)
    }
    const data = [{
        'value1': 'Chayanan',
        'value2': 'na east anglia',
        'value3': 'Puckard',
        'value4': '100',
        'value5': '1'
    }, {'value1': 'Owliyong', 'value2': 'Mongbang', 'value3': 'Puckawatto', 'value4': '9999999', 'value5': '2'}]
    return (
        <div>
            <Row justify="center">
                <Title level={2}>ท่านต้องการลงคะแนนให้ผู้สมัครเลือกตั้งท่านใด</Title>
            </Row>

            <Row justify="center">
                <Space direction="vertical" size="middle">
                    {data.map((value, index) => {

                        return (
                            <div onClick={() => handleClick(index)}>
                                <CandidateCard key={index} value={value}/>
                            </div>


                        )
                    })}
                </Space>


            </Row>

            <br/><br/>

        </div>
    )
}

