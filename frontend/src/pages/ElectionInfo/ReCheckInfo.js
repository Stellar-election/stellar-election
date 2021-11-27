import React from 'react';
import { Row, Typography, Space, Button } from 'antd';
import { Info } from './Info';
import axios from 'axios';

const { Title } = Typography;

export function ReCheckInfo({candidateInfo, nextState, prevState, setNewCandidateInfo, electionInfo, newCandidateInfo}) {

    const handleSubmit = async () => {
        const infoWithAddr = await Promise.all( candidateInfo.map(async (candidate) => {
            const res = await axios.get('http://localhost:4000/stellar/createIssuer')
            const issuer = await axios.get('http://localhost:4000/api/create-election/getIssuer')
            const address = res.data.account
            const secret = res.data.secret
            console.log(issuer.data[0].account)

            let trust
            setTimeout(async () => {
                trust = await axios.post(
                'http://localhost:4000/stellar/trustCoin',
                {
                    coinName: electionInfo.district[1][0],
                    issuer: issuer.data[0].account,
                    secret: secret
                       
                },
            ) 
            },10000)

            const database = await axios.post('http://localhost:4000/api/create-election/addCandidate',
                {
                    citizenId: candidate.nationalId,
                    first_name: candidate.firstName,
                    last_name: candidate.lastName,
                    major_area_id: electionInfo.district[1][1],   // ['bangkok',['saphansung', 0]]
                    major_area_name: electionInfo.district[1][0],
                    party: candidate.party[0],
                    wallet_address: address
                }
            )
            console.log(candidate)
            return { ...candidate, address: address }
        }));
        setNewCandidateInfo(infoWithAddr)

        nextState()
    }

    return (
        <div>
            <Row justify="center">
                <Title level={2}>ตรวจสอบข้อมูล</Title>
            </Row>

            <Row justify="center">
                <Space direction="vertical" size = "middle">
            
                    {candidateInfo.map((value,index) =>{
                        return (<Info key={index} index={index} value={value}/>)
                    })}
                </Space>
            </Row>
            <br/><br/>
            <Row justify="center" align="bottom">
                        <Space>
                            <Button type="primary" onClick={prevState} style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "100px"}}>
                                ย้อนกลับ
                            </Button>
                            <Button type="primary" onClick={handleSubmit} style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "100px"}}> 
                                ถัดไป
                            </Button>
                        </Space>
            </Row>

            
            
            
        </div>
        
      
    )
}