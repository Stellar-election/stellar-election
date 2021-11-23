import {Button, Form, Input, Typography} from 'antd';
import {VoteContext} from "../../../store/voteStore";
import {useContext} from "react";

const {Title} = Typography;

export const Checking = () => {
    const {citizen, currentState} = useContext(VoteContext)

    const [form] = Form.useForm();
    const onFinish = (values) => {
        citizen.setCitizenId(values.citizenId)

        currentState.setCurrentState(1)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleSubmit = async () => {
        const infoWithAddr = await Promise.all( candidateInfo.map(async (candidate) => {
            const res = await axios.get('http://localhost:4000/stellar/createIssuer')
            const address = res.data["account"]
            console.log(address)
            console.log(electionInfo)
            console.log(candidate)
            const database = await axios.post('http://localhost:4000/api/create-election/addCandidate',
                {
                   
                }
            )
            console.log(candidate)
            return { ...candidate, address: address }
        }));
        setNewCandidateInfo(infoWithAddr)

        nextState()
    }
    return (<div>
        <Title level={2} style={{textAlign: "center"}}>กรอกเลขบัตรประชาชนเพื่อเช็คสิทธิ์</Title>
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
                rules={[{required: true, message: 'กรุณาใส่เลขบัตรประชาชนให้ครบถ้วน'}]}
            >
                <Input/>
            </Form.Item>


            <Form.Item wrapperCol={{offset: 10, span: 24}}>
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