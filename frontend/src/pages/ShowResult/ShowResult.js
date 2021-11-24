import React,{ useState,useEffect} from 'react';
import { Row, Typography, Space, Button } from 'antd';
import { Form, Input, Cascader, DatePicker } from 'antd';
import { CandidateCard } from './CandidateCard';
import axios from 'axios';


const { Title } = Typography;



export function ShowResult(props) {


    const [data,setData] = useState([])
    const [scores,setScores] = useState([])
    const [valueTmp,setValueTmp] = useState()
    const [values, setValues] = useState(['bangkok','Saphansung'])
    useEffect(()=>{
        console.log("values: ",values)
        if(values.district !== undefined){
            const fullname = [values.district[1][0]]
            console.log("fullname: ",fullname)
            form.setFieldsValue({
                district: fullname
            });
        }
       
    },[values])
    // useEffect(() => {
        
    // }

    // //     form.setFieldsValue({
    // //         citizenId: citizen.citizenId
    //     });
    // }, [citizen]);
    
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

    const [form] = Form.useForm();
    console.log(form)
    

    const onFinish = (values) => {
        setValues(values)
        console.log('values',values)
        const areaName = values.district[1][0]
        getResult(areaName)
        
        
        // Promise.all([getResult(areaName)]).then(console.log)
    };

    // const getResulTest =  new Promise((reslove,reject)=>{
        
    // })
    const getResult = async (areaName) => {
        const res = await axios.post('http://localhost:4000/api/vote/getCandidate', {
            areaName: areaName
        })

        // setData(res.data)
        // console.log('data',data)

        // var new_data
        // setTimeout(() => {
        //     new_data = data.map(async (c) => {
        //         console.log('c',c)
        //         const score = await getScore(c.wallet_address)
        //         return score.data
        //     })
        //     console.log('here')
        //     console.log('new_data',new_data)
        // }, 5000)
        // console.log('new_data',new_data)
        
        let result = []
        if (res.data[0] != null) {
            result = res.data.map(async (value) => {
                var score = await getScore(value.wallet_address)
                var new_data = {...value,score:score}
                // setValueTmp({...value,score:score})
                return new_data
            })
            // setData(result)
        }

        // console.log('reasult',result)
        var new_result = await Promise.all(result)
        setData(new_result)
        
    }

    const getScore = async (address) => {
        const score = await axios.post('http://localhost:4000/stellar/getBalance',{
            account: address
        })
        return score.data
    }

    console.log('the real data is here',data)
    // const tmp = data?.map((value,index) => {
    //     console.log(data)
    //     return <CandidateCard key={index}  value={value} />
    // })

    return (
        <div>
        
            <Row justify="center">
                <Title level={2}>ผลคะแนนการเลือกตั้ง</Title>
            </Row>

            <Row justify="center">
                <Space direction="vertical" size = "middle">
                <Form
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 20 }}
                    layout="horizontal"
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                >   
            
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

                    
                    <Form.Item wrapperCol={{ offset: 2, span: 12 }}>
                    
                    <Space direction="horizontal" size="middle">
                    <Button type="primary" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "100px"}}>
                    ย้อนกลับ
                    </Button>

                    <Button type="primary" htmlType="submit" style={{ background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px",width: "100px"}}> 
                    แสดง
                    </Button>
                    </Space>
                    </Form.Item>
                    
            
            </Form>
            </Space>
            </Row>
            <Row justify="center">
                <Space direction="vertical" size = "middle">
                    {data.map((candidate, index) => {
                        return <CandidateCard key={index} value={candidate} />
                    })}
                    
                </Space>

            </Row>


                    
                
            
            
        </div>
    )
}