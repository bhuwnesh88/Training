import React from 'react'
import { Typography,Image,Row,Col} from 'antd';
import Nav2 from './Nav2';

const { Title } = Typography;
const {Text} = Typography;

export default function placement1() {
    return (
        <div>

            <Nav2/>
            <div style={{ paddingRight: '10px', paddingLeft: '10px', marginRight: '10px', marginLeft: '10px',marginTop:'120px' }}>
              
            <div
                style={{
                    backgroundColor: "#FCF5FF",
                    width: "90%",
                    marginTop: "100px",
                    marginLeft: '60px',
                    marginRight: '20px',
                    paddingTop: '50px',
                    paddingBottom: '50px'
                }}
            >
                <div style={{ paddingBottom: '60px', marginLeft: '80px' }}>
                    <h style={{ font: '28px proximanova-bold', color: '#444444', paddingTop: '20px', marginLeft: '400px' }}><b>Why we learn Zoho Crm</b></h></div>

                <div
                    className="site-card-wrapper"
                    style={{ backgroundColor: "#FCF5FF", }}
                >
                    <Row gutter={16}>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                <Image
                                    width={600}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/take_your_idea_to_millions.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "90px",
                                    }}
                                >
                                    <b>Take your idea to millions</b>
                                    <br />
                                    <h1 style={{ font: '16px proximanova-regular', color: '#444444' }} >Whether you have an app, blog, YouTube channel, or want to
                    manage publicity for your college fest; !</h1>
                                </h>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                <Image
                                    width={700}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/be_in_demand.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    <b>Be in demand</b>
                                    <br />
                                    <h2 style={{ font: '16px proximanova-regular', color: '#444444' }}>Digital marketing is one of the hottest career options these
                                    days with thousands of internships and jobs being added
                    everyday..</h2>
                                </h>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                <Image
                                    width={600}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/why_learn_icons/channel_your_creativity.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    <b>Channel your creativity</b>
                                    <br />
                                    <h2 style={{ font: '16px proximanova-regular', color: '#444444' }}>
                                        Whether you like numbers, or wordplay, or designing things;
                                        digital marketing offers a heady mix of creativity for
                                        everyone.
                    </h2>
                                </h>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
        </div>
    )
}
