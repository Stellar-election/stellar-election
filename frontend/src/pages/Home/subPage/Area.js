import React, {useContext} from 'react';
import {Button, Row, Typography, Space} from 'antd';
import {VoteContext} from "../../../store/voteStore";

const {Title} = Typography;


export function Area({data, setData}) {
    const {currentState, area} = useContext(VoteContext)
    const handleClick = (areaId) => {
        area.setArea(areaId)
        console.log(areaId)
        setData({ area: areaId })
        currentState.setCurrentState(2)
    }

    const content = data.map((area, index) => {
        return (
            <Button
                type="primary"
                onClick={() => handleClick(area["area_name"])}
                style={{background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px", width: "300px"}}
            >
                { index + 1 } การเลือกตั้งเขต {area["area_name"]}
            </Button>
        )
    })
    return (
        <div>
            <Row justify="center">
                <Title level={2}>การเลือกตั้งที่ท่านมีสิทธิ์ในการลงคะแนน</Title>
            </Row>
            <br/><br/>
            
            <Row justify="center" align="bottom">
                <Space direction="vertical" size = "middle">
                    {content}
                </Space>
            </Row>

        </div>
    )
}