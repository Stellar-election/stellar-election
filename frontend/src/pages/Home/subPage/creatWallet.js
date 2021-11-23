import {Button, Form, Input, Typography} from 'antd';
import {VoteContext} from "../../../store/voteStore";
import {useContext, useEffect} from "react";
import axios from 'axios';
const StellarSdk = require('stellar-sdk');

const {Title} = Typography;

export const CreateWallet = ({data, setData}) => {
    const {citizen, currentState, laserCardId, password} = useContext(VoteContext)
    const [form] = Form.useForm();
    useEffect(() => {

        form.setFieldsValue({
            citizenId: citizen.citizenId
        });
    }, [citizen]);
    const onFinish = (values) => {
        citizen.setCitizenId(values.citizenId)
        laserCardId.setLaserCardId(values.laserId)
        password.setPassword(values.password)
        createWallet(values.citizenId , values.laserId , values.password , data.area)
        setData({
            ...data,
            citizenId: values.citizenId,
            backCard: values.laserId,
            password: values.password,
        })
        currentState.setCurrentState(3)
    };

    const createWallet = async (citizenId, backCard, password, coinName) => {
        const issuer = await axios.get('http://localhost:4000/api/create-election/getIssuer')
        console.log(issuer)
        const create = await axios.post(
            'http://localhost:4000/stellar/createWallet',
            {
                citizenId: citizenId,
                backCard: backCard,
                password: password
            },
        )


        let trust
        setTimeout(() => {
            trust = axios.post(
            'http://localhost:4000/stellar/trustCoinWithLimit',
            {
                coinName: coinName,
                issuer: issuer.data[0].account,
                userWallet: {
                  citizenId: citizenId,
                  backCard: backCard,
                  password: password
                }
            },
        )
        }, 10000);

        const temp = citizenId + backCard + password
        const seed = StellarSdk.StrKey.encodeEd25519SecretSeed(temp).substring(0,32)
        const keyPair = StellarSdk.Keypair.fromRawEd25519Seed(seed);
        const account = keyPair.publicKey()
        
        let getCoin
        setTimeout(() => {
            getCoin = axios.post(
            'http://localhost:4000/stellar/getCoin',
            {
                coinName: coinName,
                account: account,
                issuer: issuer.data[0].account,
                issuer_secret: issuer.data[0].secret
            },
        )
        }, 20000);

 
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (<div>
        <Title level={3} style={{textAlign: "center"}}>สร้างบัตรเลือกตั้ง</Title>


        <Form
            name="basic"
            form={form}

            layout="vertical"

            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{marginTop: "100px",marginLeft:"auto",marginRight:"auto"}}
        >
            <Form.Item
                label="เลขบัตรประจำตัวประชาชน"
                name="citizenId"

                rules={[{required: true, message: 'กรุณาใส่เลขบัตรประชาชนให้ครบทถ้วน'}]}
            >
                <Input disabled value={citizen.citizenId} bordered={false} style={{color: "rgba(0, 0, 0, 0.85)"}}/>
            </Form.Item>
            <Form.Item
                label="เลขหลังบัตรประชาชน"
                name="laserId"
                rules={[{required: true, message: 'กรุณาใส่เลขบหลังบัตรประชาชนให้ครบทถ้วน'}]}
            >
                <Input value={citizen.citizenId}/>
            </Form.Item>
            <Form.Item
                label="รหัสผ่านที่คาดเดาได้ยาก"
                name="password"
                rules={[{required: true, message: 'กรุณาใส่รหัสผ่านที่คาดเดาได้ยากให้ครบทถ้วน'}]}
            >
                <Input.Password/>
            </Form.Item>


            <Form.Item wrapperCol={{offset: 8, span: 24}}>
                <Button type="primary" htmlType="submit" style={{
                    background: "#E97D7D",
                    borderColor: "#E97D7D",
                    marginTop: "45px",
                }}>
                    ตกลง
                </Button>
            </Form.Item>
        </Form>


    </div>)

}