import React from 'react'
import {Row,Col} from 'antd'
import { Typography,Image } from 'antd';
import Nav2 from './Nav2';

const { Title } = Typography;
const {Text} = Typography;

export default function Certificate1() {
    return (
        <div>
          <Nav2/>
     
          <div
                className="site-card-wrapper"
                style={{ backgroundColor: "#FCF5FF", width: "90%", marginLeft: '60px', paddingBottom: '40px', marginRight: '40px', paddingTop: '40px',marginTop:'150px' }}
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
                  Take the final exam online to complete the Zoho CRM{" "}
                   Training after which you will be able to download your
                  certificate from Zoho Crm Trainings
                </Text>
                .
              </div>
                    </Col>
                    <Col span={12}>
                        <Image width={350} src="zoho.png" />
                    </Col>
                </Row>
            </div> 
        </div>
    )
}
