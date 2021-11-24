import React, { useState , useEffect } from 'react';
import { Row, Typography, Space, Button } from 'antd';
import { Info } from '../ElectionInfo/Info';
import axios from 'axios';


const { Title } = Typography;


export function CreateDashboard(props) {
    const [Issuer, setIssuer] = useState()

    useEffect(()=>{
        getIssuer()
        
    },[0])

    const createIssuer = async () =>{
        const res = await axios.get('http://localhost:4000/stellar/createIssuer')
        const database = await axios.post(
            'http://localhost:4000/api/create-election/addIssuer',
            {
                account: res.data['account'],
                secret: res.data['secret']
            }
        )
        setIssuer(res.data['account'])

    }
    const getIssuer = async () =>{
        const issuer = await axios.get('http://localhost:4000/api/create-election/getIssuer')
        if(issuer.data[0] == null){
            setIssuer(null)
        }else{
            setIssuer(issuer.data[0].account)
        }
        
    }
    const IsIssuerCreate = (Issuer) ? "Created" : "None"
    
    return (
        <div>
            <Row justify="center">
                <Space direction="vertical" size = "middle">
                    <Title level={2}>DashBoard</Title>
                    <Title level={4}>Issuer : {IsIssuerCreate} </Title>
                    {Issuer == null &&
                    <Button type="primary" onClick={createIssuer}    style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "200px"}}>
                        Create Issuer
                    </Button>}
                    <Button type="primary" href="/create" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "200px"}}>
                        Create Election
                    </Button>
                    <Button type="primary" href="/result" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "200px"}}>
                        Show Result
                    </Button>
                </Space>
                
            </Row>
            <Row>
                {/* map->all election */}
            </Row>

        </div>
    )
}