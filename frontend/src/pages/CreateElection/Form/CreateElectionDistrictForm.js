import React, { useState } from 'react';
import { Form, Input, Button, Cascader, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const districtOptions = [
  {
    value: 'bangkok',
    label: 'กรุงเทพ',
    children: [
      {
        value: ['Saphansung',0],
        label: 'สะพานสูง',
      },
      {
        value: ['Bangkapi',1],
        label: 'บางกะปิ',
      },
      {
        value: ['Payathai',2],
        label: 'พญาไท',
      },
    ],
  },
]

export const CreateElectionDistrictForm = ({setElectionInfo, nextState, electionInfo}) => {
  const [form] = Form.useForm();
  form.setFieldsValue(electionInfo)

  const onFinish = (values) => {
    setElectionInfo(values)
    nextState()
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 9 }}
      layout="horizontal"
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      <Form.Item
        label="ชื่อสนามเลือกตั้ง"
        name="name"
        rules={[
          {
            required: true,
            message: 'โปรดใส่ชื่อสนามเลือกตั้ง!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="พื้นที่"
        name="district"
        rules={[
          {
            required: true,
            message: 'โปรดเลือกพื้นที่เลือกตั้ง!',
          },
        ]}
      >
        <Cascader options={districtOptions} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px"}}> 
          ตกลง
        </Button>
        <Button htmlType="button" onClick={onReset}>
          ล้าง
        </Button>
      </Form.Item>
    </Form>
  );
};