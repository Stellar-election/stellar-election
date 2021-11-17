import React, { useState } from 'react';
import { Form, Input, Button, Cascader, DatePicker } from 'antd';

const districtOptions = [
  {
    value: 'กรุงเทพ',
    label: 'กรุงเทพ',
    children: [
      {
        value: 'สะพานสูง',
        label: 'สะพานสูง',
      },
      {
        value: 'บางกะปิ',
        label: 'บางกะปิ',
      },
      {
        value: 'พญาไท',
        label: 'พญาไท',
      },
    ],
  },
]

export const CreateElectionDistrictForm = () => {
  return (
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
        <Form.Item label="ชื่อสนามเลือกตั้ง">
          <Input />
        </Form.Item>
        <Form.Item label="พื้นที่">
          <Cascader options={districtOptions} />
        </Form.Item>
        <Form.Item label="เวลาเริ่มต้นการเลือกตั้ง">
          <DatePicker />
        </Form.Item>
        <Form.Item label="เวลาสิ้นการเลือกตั้ง">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
  );
};