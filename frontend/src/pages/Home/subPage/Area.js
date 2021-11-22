import React, {useContext} from 'react';
import {Button, Row, Typography} from 'antd';
import {VoteContext} from "../../../store/voteStore";

const {Title} = Typography;


export function Area(props) {
    const {currentState, area} = useContext(VoteContext)
    const handleClick = (areaId) => {
        area.setArea(areaId)
        currentState.setCurrentState(2)
    }
    return (
        <div>
            <Row justify="center">
                <Title level={2}>การเลือกตั้งที่ท่านมีสิทธิ์ในการลงคะแนน</Title>
            </Row>
            <br/><br/>
            <Row justify="center" align="bottom">
                <Button type="primary" onClick={() => handleClick(1)}
                        style={{background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px", width: "300px"}}>
                    1 การเลือกตั้ง สส กทม เขต 1
                </Button>
            </Row>
            <br/><br/>
            <Row justify="center" align="bottom">
                <Button type="primary" onClick={() => handleClick(2)}
                        style={{background: "#E97D7D", borderColor: "#E97D7D", marginRight: "8px", width: "300px"}}>
                    2 การเลือกตั้งผู้ว่า กทม
                </Button>
            </Row>
            <br/><br/>

        </div>
    )
}