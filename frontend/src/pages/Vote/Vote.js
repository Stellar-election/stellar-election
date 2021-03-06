import React, { useContext, useEffect, useState } from 'react';
import { Row, Space, Typography } from 'antd';
import { CandidateCard } from './VoteCard';
import { VoteContext } from "../../store/voteStore";
import axios from 'axios';

const { Title } = Typography;

export function Vote({ data, setData }) {

    const { currentState, vote } = useContext(VoteContext)
    const [candidate, setCandidate] = useState([])

    const getCandidate = async (areaName) => {
        console.log('dammm')
        const res = await axios.post(
            'http://localhost:4000/api/vote/getCandidate',
            {
                areaName: areaName
            },
        )
        setCandidate(res.data)

    }

    useEffect(() => {
        getCandidate(data.area)
    }
    , [])


    const voteCandidate = async (address) => {
        const issuer = await axios.get('http://localhost:4000/api/create-election/getIssuer')
        console.log('data',data)
        const res = await axios.post(
            'http://localhost:4000/stellar/vote',
            {
                userWallet: {
                    citizenId: data.citizenId,
                    backCard: data.backCard,
                    password: data.password
                },
                destination: address,
                coinName: data.area,
                issuer: issuer.data[0].account
            },
        )
    }

    const handleClick = (selectId) => {
        vote.setVoteSelect(selectId)
        const selectedCandidate = candidate[selectId].wallet_address
        console.log(selectedCandidate)
        // console.log(selectedCandidate)
        setTimeout(() => {
            console.log('voting....')
            voteCandidate(selectedCandidate)
        }, 10000);
        setData({ ...data, selectedCandidate: candidate[selectId] })
        currentState.setCurrentState(4)
    }

    return (
        <div>
            <Row justify="center">
                <Title level={2}>ท่านต้องการลงคะแนนให้ผู้สมัครเลือกตั้งท่านใด</Title>
            </Row>

            <Row justify="center">
                <Space direction="vertical" size="middle">
                    {candidate?.map((candidate, index) => {
                        return (
                            <div onClick={() => handleClick(index)}>
                                <CandidateCard key={index} value={candidate} index={index} />
                            </div>

                        )
                    })}
                </Space>

            </Row>

            <br /><br />

        </div>
    )
}

