import React from 'react';
import {Button, Cascader, DatePicker, Form, Input, Space, Typography} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';

const {RangePicker} = DatePicker;

const districtOptions = [
    {
        value: 'พรรคการเมือง1',
        label: 'พรรคการเมือง1',
    },
    {
        value: 'พรรคการเมือง2',
        label: 'พรรคการเมือง2',
    },
    {
        value: 'พรรคการเมือง3',
        label: 'พรรคการเมือง3',
    },
]

export const CreateElectionCandidateForm = ({electionInfo, setCandidateInfo, candidateInfo, nextState, prevState}) => {
    const [form] = Form.useForm();
    const {name, district, date} = electionInfo
    form.setFieldsValue(candidateInfo)

    const partyOptions = [
        {
            value: 'พรรค1',
            label: 'พรรค1',
        },
        {
            value: 'พรรค2',
            label: 'พรรค2',
        },
        {
            value: 'พรรค3',
            label: 'พรรค3',
        },
    ]

    const onFinish = (candidates) => {
        if (candidates.users != undefined) {
            setCandidateInfo(candidates.users)
            nextState()
        }
    };

    const onReset = () => {
        form.resetFields();
    };

    const onBack = () => {
        prevState()
    };

    return (
        <>
            <Typography>{name} พื้นที่{district[0]} เขต{district[1]}</Typography>
            <Form
                labelCol={{span: 4}}
                wrapperCol={{span: 0}}
                layout="horizontal"
                form={form}
                name="control-hooks"
                onFinish={onFinish}
            >
                <Form.List name="users">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map(({key, name, fieldKey, ...restField}) => (
                                <Space key={key} style={{display: 'flex', marginBottom: 8}} align="baseline">
                                    หมายเลข {key + 1}
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'nationalId']}
                                        fieldKey={[fieldKey, 'nationalId']}
                                        rules={[{required: true, message: 'โปรดใส่รหัสบัตรประชาชน!'}]}
                                    >
                                        <Input placeholder="รหัสบัตรประชาชน"/>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'firstName']}
                                        fieldKey={[fieldKey, 'firstName']}
                                        rules={[{required: true, message: 'โปรดใส่ชื่อผู้ลงสมัคร!'}]}
                                    >
                                        <Input placeholder="ชื่อ"/>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, 'lastName']}
                                        fieldKey={[fieldKey, 'lastName']}
                                        rules={[{required: true, message: 'โปรดใส่นามสกุลผู้ลงสมัคร!'}]}
                                    >
                                        <Input placeholder="นามสกุล"/>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, 'party']}
                                        fieldKey={[fieldKey, 'party']}
                                        rules={[{required: true, message: 'โปรดเลือกพรรค!'}]}
                                    >
                                        <Cascader options={partyOptions}/>
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)}/>
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}
                                        style={{width: '910px'}}>
                                    เพิ่มผู้สมัคร
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>

                <Form.Item wrapperCol={{offset: 3, span: 16}}>
                    <Button type="primary" htmlType="submit"
                            style={{background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px"}}>
                        ตกลง
                    </Button>
                    <Button htmlType="button" onClick={onReset} style={{marginRight: "8px"}}>
                        ล้าง
                    </Button>
                    <Button htmlType="button" onClick={onBack}>
                        ย้อนกลับ
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};