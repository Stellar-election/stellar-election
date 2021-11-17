import React, { useState } from 'react';
import { CreateElectionDistrictForm } from './Form/CreateElectionDistrictForm'
import { CreateElectionCandidateForm } from './Form/CreateElectionCandidateForm'
import './CreateElection.css'

import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const { Step } = Steps;



export function CreateElection(props) {
    const [electionInfo, setElectionInfo] = useState({})
    const [candidateInfo, setCandidateInfo] = useState({})

    const status = {
        electionInfo: "finish",
        candidateInfo: "finish",
        checkInfo: "process",
        finish: "wait",
    }

    return (
        <>
            <Steps style={{ marginBottom: "16px"}}>
                <Step status={status.electionInfo} title="กรอกข้อมูลการเลือกตั้ง" icon={<UserOutlined />} />
                <Step status={status.candidateInfo} title="กรอกรายชื่อผู้สมัคร" icon={<SolutionOutlined />} />
                <Step status={status.checkInfo} title="ตรวจสอบข้อมูล" icon={<LoadingOutlined />} />
                <Step status={status.finish} title="สำเร็จ" icon={<SmileOutlined />} />
            </Steps>
            <CreateElectionDistrictForm setElectionInfo={setElectionInfo} />
            <CreateElectionCandidateForm setCandidateInfo={setCandidateInfo} />
        </>
    )
}