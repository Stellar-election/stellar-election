import {Layout, Steps} from 'antd';
import {useContext} from "react";
import {VoteContext} from "../../store/voteStore";
import {Checking} from "./subPage/cheking";
import {CreateWallet} from "./subPage/creatWallet";

const {Step} = Steps;

const {Content} = Layout;

const StepComponent = (state) => {
    console.log("state", state.state)
    switch (state.state) {
        case 0:
            return <Checking/>
        case 2:
            return <CreateWallet/>
        default:
            return <Checking/>
    }
}

export const Home = () => {
    const {currentState} = useContext(VoteContext)


    return <div>
        <Steps current={currentState.currentState}>
            <Step title="เช็คสิทธิ์" description="กรอกเลขบัตรประชาชนเพื่อเช็คสิทธิ์"/>
            <Step title="เลือกใบเลือกตั้ง" description="เลือกจุดเลือกตั้งที่ท่านมีสิทธิ์ลงคะแนน"/>
            <Step title="สร้างบัตรเลือกตั้ง" description="สร้างบัตรเลือกตั้ง"/>
            <Step title="ลงคะแนนเสียง" description="ลงคะแนนเสียงให้ผู้สมัคร"/>
            <Step title="แสดงผลการลงคะแนน" description="แสดงผลการลงคะแนนของท่าน"/>
        </Steps>
        <Content style={{width: "500px", margin: "auto", marginTop: "200px", marginBottom: "300px"}}>
            <StepComponent state={currentState.currentState}/>

        </Content>
    </div>

}
