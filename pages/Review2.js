import React from 'react'
import {Row,Col,Carousel,Card,Rate} from 'antd'
import {LeftOutlined,RightOutlined} from '@ant-design/icons';
import Nav3 from './Nav3'
import {Typography} from 'antd'
const { Title } = Typography;
const {Text} = Typography;
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "",
          fontSize: "25px",
          lineHeight: "1.5715",
          marginRight: ""
        }}
        onClick={onClick}
      >
        <RightOutlined style={{ color: 'purple' }} />
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: '',
          fontSize: "25px",
          lineHeight: "1.5715",
          margineft: '500px'
  
        }}
        onClick={onClick}
      >
        <LeftOutlined style={{ color: 'purple' }} />
      </div>
    );
  };
  
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  

export default function Review1() {
    return (
        <div>
           <Nav3/>     <div>
               <div>
          <Row justify="center">
            <Col span={16}>
              <div>
                <Title
                  style={{
                    marginTop: "150px",
                    justifyContent: "center",
                    marginLeft: "300px",
                    marginBottom: "50px",

                  }}
                  level={3}
                >
                  Review from Student
                </Title>
              </div>
              <Carousel arrows {...settings}>
                <div style={{ display: "flex", backgroundColor: "#FCF5FF" }}>
                  <div className="site-card-wrapper">
                    <Row gutter={24}>
                      <Col span={12}>
                        <Card>
                          <div style={{ display: "flex" }}>
                            <img src="s10.png" style={{ borderRadius: "50%" }} />
                            <div style={{ marginTop: "30px" }}>
                              <h
                                style={{
                                  font: "20px proximanova-bold",
                                  color: "#444444",
                                }}
                              >
                                &nbsp;&nbsp;Rohit
                              </h>
                              <br />
                              <h level={5}>
                                &nbsp;&nbsp;Indira Gandhi National
                                <br />
                                &nbsp;&nbsp; Open University
                              </h>
                              <br />
                              &nbsp;&nbsp; <Rate allowHalf defaultValue={4.5} />
                            </div>
                          </div>
                          <p>
                            was keen to learn Zoho Books but was not sure
                            where to do it from. I heard about the training on
                            Zoho Books and really liked it. So I took it and
                            I'm glad I did because I had a fantastic learning
                            experience!
                          </p>
                        </Card>
                      </Col>
                      <Col span={12}>
                        <Card>
                          <div style={{ display: "flex" }}>
                            <img
                              src="s7.png"
                              style={{ borderRadius: "50%" }}
                            />
                            <div style={{ marginTop: "30px" }}>
                              <h
                                style={{
                                  font: "20px proximanova-bold",
                                  color: "#444444",
                                }}
                              >
                                &nbsp;&nbsp;Arun
                              </h>
                              <br />
                              <h level={5}>
                                &nbsp;&nbsp;Indira Gandhi National
                                <br />
                                &nbsp;&nbsp; Open University
                              </h>
                              <br />
                              &nbsp;&nbsp; <Rate allowHalf defaultValue={3.5} />
                            </div>
                          </div>
                          <p>
                            The Zoho Books training program provided by
                            Zoho Books is one of the best I've done! The
                            content was well structured & <br />
                            having assignments to do after every chapter really
                            helped me become more confident
                          </p>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div>
                  <div className="site-card-wrapper">
                    <Row gutter={24}>
                      <Col span={12}>
                        <Card>
                          <div style={{ display: "flex" }}>
                            <img
                              src="s8.png"
                              style={{ borderRadius: "50%" }}
                            />
                            <div style={{ marginTop: "30px" }}>
                              <h
                                style={{
                                  font: "20px proximanova-bold",
                                  color: "#444444",
                                }}
                              >
                                &nbsp;&nbsp;Rani
                              </h>
                              <br />
                              <h level={5}>
                                &nbsp;&nbsp;Jaipur National University
                                <br />
                              </h>
                              <br />
                              &nbsp;&nbsp; <Rate allowHalf defaultValue={2.5} />
                            </div>
                          </div>
                          <p>
                            As I have a Bachelor's degree in Mechanical
                            Engineering, everything about Zoho Books was
                            new for me. But after the training, I have started
                            writing SEO-friendly blogs on my own website!
                          </p>
                        </Card>
                      </Col>
                      <Col span={12}>
                        <Card>
                          <div style={{ display: "flex" }}>
                            <img
                              src="s6.png"
                              style={{ borderRadius: "50%" }}
                            />
                            <div style={{ marginTop: "30px" }}>
                              <h
                                style={{
                                  font: "20px proximanova-bold",
                                  color: "#444444",
                                }}
                              >
                                &nbsp;&nbsp;Geetika
                              </h>
                              <br />
                              <h level={5}>
                                &nbsp;&nbsp;Raipur Open University
                              </h>
                              <br />
                              &nbsp;&nbsp; <Rate allowHalf defaultValue={3.5} />
                            </div>
                          </div>
                          <p>
                            In the 6 weeks of the Zoho Books training,
                            <br /> I learnt a lot. The videos, modules, and
                            assignments were extremely informative.
                            <br /> The module tests are challenging, and test
                            the knowledge you gain during the course
                          </p>{" "}
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div>
                  <div className="site-card-wrapper">
                    <Row gutter={24}>
                      <Col span={12}>
                        <Card>
                          <div style={{ display: "flex" }}>
                            <img
                              src="s15.png"
                              style={{ borderRadius: "50%" }}
                            />
                            <div style={{ marginTop: "30px" }}>
                              <h
                                style={{
                                  font: "20px proximanova-bold",
                                  color: "#444444",
                                }}
                              >
                                &nbsp;&nbsp;Ashmit
                              </h>
                              <br />
                              <h level={5}>
                                &nbsp;&nbsp;Anugrah Narayan College
                                <br />
                              </h>
                              <br />
                              &nbsp;&nbsp; <Rate allowHalf defaultValue={2.5} />
                            </div>
                          </div>
                          <p>
                            This training is packed with lots of digital
                            marketing essential tools, tips & techniques which
                            one has to know before stepping into the world of
                            Zoho Books.
                          </p>
                        </Card>
                      </Col>
                      <Col span={12}>
                        <Card>
                          <div style={{ display: "flex" }}>
                            <img
                              src="s12.png"
                              style={{ borderRadius: "50%" }}
                            />
                            <div style={{ marginTop: "30px" }}>
                              <h
                                style={{
                                  font: "20px proximanova-bold",
                                  color: "#444444",
                                }}
                              >
                                &nbsp;&nbsp;Ajay
                              </h>
                              <br />
                              <h level={5}>&nbsp;&nbsp;Mountollege </h>
                              <br />
                              &nbsp;&nbsp; <Rate allowHalf defaultValue={3.5} />
                            </div>
                          </div>

                          <p>
                            This training program offered by Zoho Books is the
                            first step for a beginner to get into the digital
                            world of today. It is divided into different topics
                            which are extremely easy to understand and apply in
                            real life.
                          </p>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </div>    
    
      </div>
</div>
    
    )
}
