import React from 'react'
import Nav3 from'./Nav3'
import { Typography,Image,Row,Col} from 'antd';
const { Title } = Typography;
const {Text} = Typography;
export default function Placement2() {
    return (
        <div>
            <Nav3/>
           <div style={{ paddingRight: '10px', paddingLeft: '10px', marginRight: '10px', marginLeft: '10px',marginTop:'120px' }}>
                <div style={{ marginTop: '150px', marginLeft: '40px', marginRight: '40px', paddingLeft: '40px', paddingRight: '40px', width: '90%', paddingBottom: '40px' }}>
                    {" "}
                    <Text style={{ font: "28px proximanova-bold", color: "#444444", marginLeft: '380px' }}>
                        <b> What placement assistant will you receive?</b>
                    </Text>{" "}
                </div>
                <div className="site-card-wrapper">
                <Row gutter={16}>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                {" "}
                                <Image
                                    style={{ marginLeft: "40px" }}
                                    width={200}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_1.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    {" "}
                                    <b>
                                    Students with a commerce background
                  </b>
                                </h>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                {" "}
                                <Image
                                    style={{ marginLeft: "40px" }}
                                    width={300}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_2.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    {" "}
                                    <b>
                                    Working professionals looking for a career change                  </b>{" "}
                                </h>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                {" "}
                                <Image
                                    style={{ marginRight: "40px" }}
                                    width={200}
                                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_3.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
<b>Individuals with an accountancy background</b>              </h>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
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
                    <h style={{ font: '28px proximanova-bold', color: '#444444', paddingTop: '20px', marginLeft: '400px' }}><b>Why we learn Zoho Books</b></h></div>

                <div
                    className="site-card-wrapper"
                    style={{ backgroundColor: "#FCF5FF", }}
                >
                    <Row gutter={16}>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                <Image
                                    width={400}
                                    src="p.jpg"
                                
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "90px",
                                    }}
                                >
                                    <b>Stay current with accounting technology</b>
                                    <br />
                                    <h1 style={{ font: '16px proximanova-regular', color: '#444444' }} >Ride the cloud accounting wave with Zoho Books. Get
hands-on training on the latest features in accounting, banking,
automation, and artificial intelligence.</h1>
                                </h>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                <Image
                                    width={400}
                                    src="s1.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    <b>Add to your skill set</b>
                                    <br />
                                    <h2 style={{ font: '16px proximanova-regular', color: '#444444' }}>Zoho Book is one of the hottest career options these
                                    Boost your standing in the job market. Get a handle on Zoho
Books to stay one step ahead of your peers..</h2>
                                </h>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ display: "flex" }}>
                                <Image
                                    width={400}
                                    src="p3.png"
                                />
                                <h
                                    style={{
                                        font: "20px proximanova-bold",
                                        marginLeft: "",
                                        marginTop: "80px",
                                    }}
                                >
                                    <b>Maximise your learning experience</b>
                                    <br />
                                    <h2 style={{ font: '16px proximanova-regular', color: '#444444' }}>
                                    Discover the best ways to put theory into practice when you
take on real-world business scenarios.          
                    </h2>
                                </h>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>  
        </div>
    )
}
