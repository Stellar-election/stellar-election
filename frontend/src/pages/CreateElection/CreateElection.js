import React, { useState } from 'react';
import { Steps, Row, Col } from 'antd';
import { CreateElectionDistrictForm } from './Form/CreateElectionDistrictForm'
import { CreateElectionCandidateForm } from './Form/CreateElectionCandidateForm'
import { ReCheckInfo } from '../ElectionInfo/ReCheckInfo';
import { CreateResult } from '../CreateResult/CreateResult';
import axios from 'axios'
import './CreateElection.css'

const { Step } = Steps;

export function CreateElection(props) {
    const [electionInfo, setElectionInfo] = useState({})
    const [candidateInfo, setCandidateInfo] = useState([])
    const [newCandidateInfo, setNewCandidateInfo] = useState([])
    const [state, setState] = useState(0)


    const nextState = () => {
        if (state == 2) {
            setTimeout(() => {
                if (newCandidateInfo != []) {
                    setState(3)
                }
            }, 1000)
        }
        if (state < 3) setState(state + 1)
    }

    const prevState = () => {
        if (state > 0) setState(state - 1)
    }
    
    const allProps = {
        electionInfo: electionInfo,
        setElectionInfo: setElectionInfo,
        candidateInfo: candidateInfo,
        setCandidateInfo: setCandidateInfo,
        newCandidateInfo: newCandidateInfo,
        setNewCandidateInfo: setNewCandidateInfo,
        nextState: nextState,
        prevState: prevState,
    }
    
    return (
        <Row>
            <Col span={6}>
                <Steps direction="vertical" size="small" current={state} className="custome-step" >
                    <Step title="กรอกข้อมูลการเลือกตั้ง" />
                    <Step title="กรอกรายชื่อผู้สมัคร" />
                    <Step title="ตรวจสอบข้อมูล" />
                    <Step title="สำเร็จ" />
                </Steps>
            </Col>
            <Col span={18}>
                {state === 0 && <CreateElectionDistrictForm {...allProps} />}
                {state === 1 && <CreateElectionCandidateForm {...allProps} />}
                {state === 2 && <ReCheckInfo {...allProps}  />}
                {state === 3 && <CreateResult {...allProps}  />}
            </Col>
      </Row>
    )
}