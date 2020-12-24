import React from 'react'
import {Row,Col,Card,Image} from 'antd'
import Nav3 from './Nav3'
import {Typography} from 'antd'
const { Title } = Typography;
const {Text} = Typography

export default function Certificate2() {
    return (
        <div>
            <Nav3/>
            <div
                className="site-card-wrapper"
                style={{ backgroundColor: "#FCF5FF", width: "90%", marginLeft: '60px', paddingBottom: '40px', marginRight: '40px', marginTop: '140px' }}
            >
                <div style={{ paddingBottom: "50px" }}>
                    <Text style={{ font: '28px proximanova-bold', color: '#4444444', marginLeft: '380px' }}><b>How will you get your certificate?</b>
                    </Text>
                </div>
                <Row gutter={24}>
                    <Col span={12}>
                        <div
                            style={{
                                marginTop: "110px",
                                font: "px proximanova-regular",
                                color: "#444444",
                                marginLeft: "350px",
                            }}
                        >
                            <Text style={{ font: '16px proximanova-regular', color: '#444444' }}>
                                {" "}
                  Take the final exam online to complete the Zoho Books{" "}
                   Training after which you will be able to download your
                  certificate from Zoho Books Trainings
                </Text>
                .
              </div>
                    </Col>
                    <Col span={12}>
                        <Image width={350} src="zbooks.jpg" />
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}
