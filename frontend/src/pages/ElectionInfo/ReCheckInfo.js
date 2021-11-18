import React from 'react';
import { Steps, Row, Col, Typography, Space, Grid, Button, Layout } from 'antd';
import { Info } from './Info';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

export function ReCheckInfo({candidateInfo, nextState, prevState, newCandidateInfo, setNewCandidateInfo}) {

    const tmp = () => {
        const infoWithAddr = candidateInfo.map(candidate => {
            // send data and get address
            var address = "0x00000000000000000000"
            return  {...candidate, address: address}
        });
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
                            <Button type="primary" onClick={tmp} style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "100px"}}> 
                                ถัดไป
                            </Button>
                        </Space>
            </Row>

            
            
            
        </div>
        
      
    )
}