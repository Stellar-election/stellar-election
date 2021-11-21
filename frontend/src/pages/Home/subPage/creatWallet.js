import {Button, Form, Input, Typography} from 'antd';
import {VoteContext} from "../../../store/voteStore";
import {useContext, useEffect} from "react";

const {Title} = Typography;

export const CreateWallet = () => {
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
        currentState.setCurrentState(3)
    };

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