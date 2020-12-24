import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Tabs, Space } from "antd";
import { Divider } from "antd";
import { Collapse, Carousel, Rate } from "antd";
import Footer from './Footer'

const contentStyle = {
  margintop: "90px",
  height: "160px",
  color: "purple",
  lineHeight: "160px",
  textAlign: "center",
  background: "white",
};
const { TabPane } = Tabs;

import {
  StarOutlined,
  BehanceSquareOutlined,
  DownloadOutlined,
  TeamOutlined,
  CalendarOutlined,
  SyncOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  VideoCameraOutlined,
  BulbOutlined,
  MessageOutlined,
  RightOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Steps, Popover } from "antd";

const { Step } = Steps;

import { Card, Col, Row } from "antd";
import { Button } from "antd";
import {
  Form,
  Input,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

import { Typography } from "antd";
import { Image } from "antd";

const { Title } = Typography;
const { Text } = Typography;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const gridStyle = {
  width: "25%",
  textAlign: "center",
};
const { Panel } = Collapse;

const text = (
  <p style={{ paddingLeft: 24 }}>
    <ol>
      <li>.Creating a blog</li>
      <li>.Creating a Google Analytics Account and linking to Blog account</li>
      <li>.Implementing Google Analytics</li>
      <li>.GA Account Structure</li>
      <li>.Understanding Metrics</li>
      <li>.Standard Reports</li>
    </ol>
  </p>
);
const text1 = (
  <ul>
    <li>Importance of a Search Engine?</li>
    <li>What is SEO?</li>
    <li>Page Rank / Authority of a website</li>
    <li>On Page SEO</li>
    <li>Off Page SEO</li>
    <li>Tools</li>
  </ul>
);
const text2 = (
  <ul>
    <li>Email Marketing</li>
  </ul>
);
const text3 = (
  <ul>
    <li>Inbound Marketing for B2B businesses</li>
    <li>Buyer Persona</li>
    <li>Content Marketing</li>
  </ul>
);
const text4 = (
  <ul>
    <li>Advertising Fundamentals</li>
    <li>Google AdWords Overview</li>
    <li>Search Advertising</li>
    <li>AdWords Auction</li>
    <li>Display Advertising</li>
    <li>YouTube Advertising</li>
    <li>A/B Testing</li>
  </ul>
);
const text5 = (
  <ul>
    <li>Overview</li>
    <li>Targeting Mobile users</li>
    <li>Driving App Installs</li>
  </ul>
);
const text6 = (
  <ul>
    <li>
      Facebook Organic
      <li></li>Facebook Paid
    </li>
    <li>Twitter Marketing</li>
    <li>LinkedIN Marketing</li>
    <li>Quora, Pinterest & Google Plus</li>
    <li>Social Listening & Online Reputation Management</li>
    <li>Marketing Automation</li>
  </ul>
);

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

const contentStyle1 = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SampleNextArrow1 = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: '',
        fontSize: "25px",
        lineHeight: "1.5715",
        marginRight: '290px'
      }}
      onClick={onClick}
    >
      <ArrowRightOutlined style={{ color: "purple" }} />
    </div>
  );
};

const SimplePrevArrow1 = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "",
        fontSize: "50px",
        lineHeight: "1.5715",
        marginLeft: "250px"
      }}
      onClick={onClick}

    >
      <ArrowLeftOutlined style={{ color: 'white' }} />

    </div>
  );
};

const settings1 = {
  nextArrow: <SampleNextArrow1 />,
  prevArrow: <SimplePrevArrow1 />
};



export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Nav />
      <div
        class="row"
        style={{
          marginLeft: "40px",
          top: "px",
          left: "30px",
          backgroundcolor: "purple",
        }}
      >
        <Image
          style={{ marginTop: "120px", width: "100%", color: "purple" }}
          width={1250}
          src="a10.webp"
        />

        <div
          className="col-6"
          style={{
            position: "absolute",
            bottom: "278px",
            left: "796",
            color: "white",
            top: "200px",
            marginTop: "10px",

          }}
        >
          <div
            className="site-card-border-less-wrapper"
            style={{ padding: "30px", background: "#ececec", marginLeft: '750px' }}
          >
            <Card bordered={false} style={{ width: "400px", height: "500px", marginLeft: '' }}>
              <div style={{ width: "70%", border: '', }}>
                <Form>
                  <Form.Item label="Email" placeholder="Ayush@gmail.com">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Password">
                    <Input />
                  </Form.Item>

                  <Form.Item label="FullName">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Mobile no">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Batch">
                    <Select>
                      <Select.Option value="demo">
                        start 1st December 2020
                      </Select.Option>
                      <Select.Option value="demo">
                        start 15th December 2020
                      </Select.Option>
                      <Select.Option value="demo">
                        start 20th December 2020
                      </Select.Option>
                      <Select.Option value="demo">
                        start 1st January 2021
                      </Select.Option>
                      <Select.Option value="demo">
                        start 15th january 2021
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="choose your Objective">
                    <Select>
                      <Select.Option value="demo">
                        Gain aa new skill
                      </Select.Option>
                      <Select.Option value="demo">
                        Build my own project
                      </Select.Option>
                      <Select.Option value="demo">
                        Get an internship/job in future
                      </Select.Option>
                      <Select.Option value="demo">
                        Get Certificate
                      </Select.Option>
                      <Select.Option value="demo">
                        fulfil college Reqirement
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <span
                    style={{
                      color: "black",
                      Right: "80px",
                      marginLeft: "60px",
                      font:'25px '
                    }}
                  >
                    {" "}
                    <Text delete><b>₹4499</b></Text><b style={{}}>&nbsp;&nbsp;₹3339 <br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Valid till Dec</b> 
                  </span>
                  <br></br><br/><br/>
                  <Button
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                     
                      marginLeft: "100px",
                    }}
                  >
                    Signup
                  </Button>
                </Form>
              </div>
            </Card>
          </div>
        </div>

        <div
          class="bottom-left"
          style={{
            position: "absolute",
            bottom: "278px",
            left: "196px",
            color: "white",
            top: "200px",
            marginTop: "15px",

          }}
        >
          &nbsp; <Button
            style={{
              borderRadius: "1px",
              backgroundColor: "#00FFC6",
              color: "#005441",
              font: "proximanova-semibold",
              color: "black",
              margineft: '90px'
            }}
          >
            Certified Online Training{" "}
          </Button>
          <br />
          <br />
          <br />
          <div style={{ margintop: "10px" }}>
            {" "}
            <Text
              underline
              style={{
                color: "white",
                font: "60px proximanova-extrabold",
                padding: "3px -8px",
                marginTop: "-9px",
                marginLeft: "4px",
                lineheight: "64px",
              }}
            >
              Learn Digital
              <br /> Marketing
            </Text>
            <br />
            <br />
            <Title
              style={{
                color: "white",
                font: "24px proximanova-regular",
                Top: "5px",
                color: "white",
              }}
            >
              Become an ace digital marketer
              <br /> - learn Google Analytics, SEO,
              <br /> Social Media Marketing,
              <br /> Email Marketing, and more
            </Title>
            <Button
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                marginLeft: "",
                fontweight: "600",
                fontsize: "14px",
                lineheight: "16px",
              }}
            >
              <StarOutlined />
              4.2
            </Button>
            <Button
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                marginLeft: "5px",
              }}
            >
              <TeamOutlined />
              32,289 Enrolled
            </Button>
            <Button
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                marginLeft: "5px",
              }}
            >
              <CalendarOutlined />6 weeks
            </Button>
            <Button
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                marginLeft: "5px",
              }}
            >
              <SyncOutlined />
              Placement Assistance
            </Button>
          </div>
        </div>
      </div>

      <div
        className="card"
        style={{
          color: "black",
          backgroundColor: "",
          width: "100%",
          marginTop: "100px",
          marginBottom: "100px",
          marginLeft: "140px",
        }}
      >
        <Title
          style={{
            color: "black",
            justifyContent: "center",
            marginLeft: "360px",
            marginBottom: "80px",
            font: "28px proximanova-bold",
            color: "#444444",
          }}
        >
          <b>Training Highlights</b>{" "}
        </Title>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <img style={{ width: "50px" }} src="learn.png" />
          &nbsp;&nbsp;
          <h3 style={{ font: "20px proximanova-bold", color: "#444444" }}>
            {" "}
            <b>Learn from home</b>
            <br />
            <Text
              style={{ font: "16px proximanova-regular", color: "#444444" }}
            >
              stay safe indoors
            </Text>
          </h3>
          <img
            style={{ width: "50px", marginLeft: "130px" }}
            src="certificate.png"
          />
          &nbsp;&nbsp;
          <Title
            style={{
              marginTop: "2px",
              margineft: "",
              padding: "0 0 0 ",
              font: "20px proximanova-bold",
              color: "#444444",
            }}
          >
            <b>Certificate of Training</b>
            <br />
            <Text style={{ font: "16px proximanova-bold" }}>
              From Internshala Trainings
            </Text>
          </Title>
          <img
            style={{ width: "50px", marginLeft: "130px" }}
            src="placement.png"
          />
          &nbsp;&nbsp;
          <Title
            style={{
              marginTop: "2px",
              margineft: "",
              padding: "0 0 0 ",
              font: "20px proximanova-bold",
              color: "#444444",
            }}
          >
            <b>Placement Assistance</b>
            <br />
            <Text
              style={{ font: "16px proximanova-regular", color: "#444444" }}
            >
              To build your career
            </Text>
          </Title>
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <img style={{ width: "50px" }} src="video.png" />
          &nbsp;&nbsp;
          <Title style={{ font: "20px proximanova-bold", color: "#444444" }}>
            {" "}
            <b>86 video tutorials</b>
            <br />
            <Text
              style={{ font: "16px proximanova-regular", color: "#444444" }}
            >
              Learn anytime, anywhere
            </Text>
          </Title>
          <img
            style={{ width: "50px", marginLeft: "120px" }}
            src="projects.png"
          />
          &nbsp;&nbsp;
          <Title
            style={{
              marginTop: "2px",
              margineft: "",
              padding: "0 0 0 ",
              font: "20px proximanova-bold",
              color: "#444444",
            }}
          >
            <b>Build 8 projects</b>
            <br />
            <Text
              style={{ font: "16px proximanova-regular", color: "#444444" }}
            >
              For hands-on practice
            </Text>
          </Title>
          <img
            style={{ width: "50px", marginLeft: "190px" }}
            src="doubt1.png"
          />
          &nbsp;&nbsp;
          <Text
            style={{
              marginTop: "2px",
              margineft: "",
              padding: "0 0 0 ",
              font: "20px proximanova-bold",
              color: "#444444",
            }}
          >
            <b>Doubt clearing</b>
            <br />
            <Text
              style={{ font: "16px proximanova-regular", color: "#444444" }}
            >
              Through Q&A forum
            </Text>
          </Text>
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <img style={{ width: "50px" }} src="beginner.png" />
          &nbsp;&nbsp;
          <Title style={{ font: "20px proximanova-bold", color: "#444444" }}>
            <b>Beginner friendly</b>

            <br />
            <Text
              style={{ font: "16px proximanova-regular", color: "#4444444" }}
            >
              No prior knowledge required
            </Text>
          </Title>
          <img style={{ width: "50px", marginLeft: "100px" }} src="weeks.png" />
          &nbsp;&nbsp;
          <Title
            style={{
              marginTop: "2px",
              margineft: "",
              padding: "0 0 0 ",
              font: "20px proximanova-bold",
              color: "#444444",
            }}
          >
            <b>6 weeks access</b>

            <br />
            <Text
              style={{ font: "16px proximanova-regular", color: "#444444" }}
            >
              To the platform
            </Text>
          </Title>
          <img
            style={{ width: "50px", marginLeft: "190px" }}
            src="downloadable.png"
          />
          &nbsp;&nbsp;
          <Title
            style={{
              marginTop: "2px",
              margineft: "",
              padding: "0 0 0 ",
              font: "20px proximanova-bold",
              color: "#444444",
            }}
          >
            <b>Downloadable content</b>

            <br />
            <Text
              style={{ font: "16px proximanova-regular", color: "#444444" }}
            >
              With lifetime access
            </Text>
          </Title>
        </div>
      </div>

      <div>
        <div
          className="site-card-wrapper"
          style={{ backgroundColor: "#FCF5FF", width: "90%", marginLeft: '60px', paddingBottom: '40px', marginRight: '40px', paddingTop: '40px' }}
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
                  Take the final exam online to complete the Digital Marketing{" "}
                   Training after which you will be able to download your
                  certificate from Internshala Trainings
                </Text>
                .
              </div>
            </Col>
            <Col span={12}>
              <Image width={350} src="certificatee.jpg" />
            </Col>
          </Row>
        </div>
        <div style={{ paddingRight: '10px', paddingLeft: '10px', marginRight: '10px', marginLeft: '10px' }}>
          <div style={{ marginTop: '80px', marginLeft: '40px', marginRight: '40px', paddingLeft: '40px', paddingRight: '40px', width: '90%', paddingBottom: '40px' }}>
            {" "}
            <Text style={{ font: "28px proximanova-bold", color: "#444444", marginLeft: '330px' }}>
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
                    Free{" "}
                    <b>
                      Placement <br />
                    Preparation Training
                  </b>
                  </h>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ display: "flex" }}>
                  {" "}
                  <Image
                    style={{ marginLeft: "40px" }}
                    width={200}
                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_2.png"
                  />
                  <h
                    style={{
                      font: "20px proximanova-bold",
                      marginLeft: "",
                      marginTop: "80px",
                    }}
                  >
                    Access to{" "}
                    <b>
                      accurated <br /> internship & jobs
                  </b>{" "}
                  </h>
                </div>
              </Col>
              <Col span={8}>
                <div style={{ display: "flex" }}>
                  {" "}
                  <Image
                    style={{ marginRight: "40px" }}
                    width={500}
                    src="https://trainings.internshala.com/uploads/digital-marketing/signup_page_media/placement_assistance_icons/placement_assistance_3.png"
                  />
                  <h
                    style={{
                      font: "20px proximanova-bold",
                      marginLeft: "",
                      marginTop: "80px",
                    }}
                  >
                    Top performers will be{" "}
                    <b>highlighted in their internship & job applications</b> on
                  Internshala
                </h>
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
            <h style={{ font: '28px proximanova-bold', color: '#444444', paddingTop: '20px', marginLeft: '330px' }}><b>Why we learn digital marketing</b></h></div>

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

        <div style={{ width: "90%", marginTop: "80px", marginBottom: "80px", paddingleft: '180px', paddingRight: '40px', marginLeft: '70px' }}>
          <div>
            <Text
              style={{
                marginLeft: "430px",
                color: "black",
                font: "28px proximanova-bold",
              }}
            >
              <b>How will your training work</b>
            </Text>
          </div>
          <div style={{ marginTop: "120px", color: "purple" }}>
            <Steps style={{ backgroundcolor: "purple" }} current={1}>
              <Step
                style={{ color: 'black' }}
                title="1"
                description="<b>Watch the video you learn various concept.</b>"
              />
              <Step style={{ Color: 'purple' }}
                status="finish"

                title="2"
                description="Test your knowledge through quizzes and module test."
              />
              <Step
                status="finish"
                style={{ color: "purple" }}
                title="3"
                description="Get hand on practice by doing project."
              />
              <Step
                status="finish"
                style={{ color: "purple" }}
                title="4"
                description="Take the final exam to get certified in digital marketing."
              />
            </Steps>
          </div>
        </div>

        <div
          style={{
            width: "80%",
            height: "",
            margintop: "80px",
            marginLeft: "120px",
            paddingTop: '40px',
            paddingBottom: '40px',
            marginBottom: '40px'
          }}
        >
          <Text
            style={{
              marginTop: "50px",
              marginLeft: "280px",
              justifyContent: "center",
              font: "28px proximanova-bold",
              color: "black",

              marginBottom: '40px',
              paddingBottom: '40px'
            }}
          >
            <b>What will be the training syllabus?</b>
          </Text>
          <div style={{ fontSize: "50px", margintop: "180px", paddingTop: '80px', }}>
            <Collapse bordered={false} defaultActiveKey={["1"]}>
              <br />
              <br />
              <Panel
                style={{ font: '24px proximanova-bold', color: '#444444' }}
                header="Blogging And Web Analytics"
                key="1"
              >
                <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text}</div>
              </Panel>
              <br />
              <br />

              <Panel
                style={{ font: '24px proximanova-bold', color: '#444444' }}
                header="Search Engine Optimisation
"
                key="2"
              >
                <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text1}</div>
              </Panel>
              <br />
              <br />
              <Panel
                style={{ font: '24px proximanova-bold', color: '#444444' }}
                header="Email Marketing"
                key="3"
              >
                <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text2}</div>
              </Panel>
              <br />
              <br />
              <Panel
                style={{ font: '24px proximanova-bold', color: '#444444' }}
                header="Inbound And Content Marketing"
                key="4"
              >
                <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text3} </div>
              </Panel>
              <br />
              <br />
              <Panel
                style={{ font: '24px proximanova-bold', color: '#444444' }}
                header="Online Advertising - Search, Display and Video"
                key="5"
              >
                <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text4}</div>
              </Panel>
              <br />
              <br />
              <Panel
                style={{ font: '24px proximanova-bold', color: '#444444' }}
                header="Mobile Marketing"
                key="6"
              >
                <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text5}</div>
              </Panel>
              <br />
              <nr />
              <Panel
                style={{ font: '24px proximanova-bold', color: '#444444' }}
                header="Social Media Marketing - Platforms, ORM & Automation
"
                key="7"
              >
                <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text6}</div>
              </Panel>
              <br />
              <br />
            </Collapse>
          </div>
        </div>
        <div style={{ backgroundColor: "#FCF5FF", marginTop: '40px', marginBottom: '40px', paddingLeft: '40px', paddingRight: '40px', width: '90%', marginLeft: '80px' }}>
          <div style={{ backgroundcolor: "#f8f8f8", marginLeft: "380px" }}>
            <Title style={{ font: '28px proximanova-bold', color: '#444444', paddingTop: '40px', paddingBottom: '40px' }} level={5}><b>How will your doubt get solved</b></Title>
            <img src="doubt1.png" style={{ width: "80px", margintop: "180px" }} />
            <Text style={{ display: "inline-block" }}>
              You can post your doubts on the Q&A forum{" "}<br />
              which will be answered by the teachers within 24 hours.
            </Text>
          </div></div>
<div>



<div style={{marginLeft:'600px',marginTop:'50px',marginBottom:'50px'}}><Title >Our Experts</Title></div>
        <div style={{marginTop:'100px',marginLeft:'140px',marginBottom:'50px',marginRight:'50px',display:'flex'}}> 
      <div>  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="bsir1.jpg"
        style={{borderRadius:'50%'}}
      />
    }
   
  >
    <Title level={4}><b>Bhuvnesh Shrivastav</b><br/>
    Cofounder of Nb  Technology<br/>
    Digital Marketing Expert<br/>
    <Button style={{backgroundColor:'black',color:'white'}}>8+ year Experience</Button>
    </Title>
  </Card>
   </div>
   
   <div style={{marginLeft:'90px'}}>  <Card style={{width:'100%',border:'1px solid'}}
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="NSIR.jpg"
        style={{borderRadius:'50%'}}
      />
    }
   
  >
    <Title level={4}><b>kumar Nishant</b><br/>
    
    Digital Marketing Expert<br/>
    <Button style={{backgroundColor:'black',color:'white'}}>12+ year Experience</Button>
    </Title>
  </Card>
   </div>
   
      
   <div style={{marginLeft:'90px'}}>  <Card style={{width:'100%',border:'1px solid'}}
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="rahul.jpg"
        style={{borderRadius:'50%'}}
      />
    }
   
  >
    <Title level={4}><b>Abhishek Singh</b><br/>
    
    Digital Marketing Expert<br/>Content Writer<br/><br/><br/>
    <Button style={{backgroundColor:'black',color:'white'}}>4+ year Experience</Button>
    </Title>
  </Card>
   </div>
   
   
   
   </div>


</div>

     
        <div>
          <Row justify="center">
            <Col span={16}>
              <div>
                <Title
                  style={{
                    marginTop: "80px",
                    justifyContent: "center",
                    marginLeft: "300px",
                    marginBottom: "20px",

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
                            <img src="e.png" style={{ borderRadius: "50%" }} />
                            <div style={{ marginTop: "30px" }}>
                              <h
                                style={{
                                  font: "20px proximanova-bold",
                                  color: "#444444",
                                }}
                              >
                                &nbsp;&nbsp;Abhimaan
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
                            was keen to learn Digital Marketing but was not sure
                            where to do it from. I heard about the training on
                            Internshala and really liked it. So I took it and
                            I'm glad I did because I had a fantastic learning
                            experience!
                          </p>
                        </Card>
                      </Col>
                      <Col span={12}>
                        <Card>
                          <div style={{ display: "flex" }}>
                            <img
                              src="vedika.png"
                              style={{ borderRadius: "50%" }}
                            />
                            <div style={{ marginTop: "30px" }}>
                              <h
                                style={{
                                  font: "20px proximanova-bold",
                                  color: "#444444",
                                }}
                              >
                                &nbsp;&nbsp;Vedika
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
                            The Digital Marketing training program provided by
                            Internshala is one of the best I've done! The
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
                              src="man.png"
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
                            Engineering, everything about Digital Marketing was
                            new for me. But after the training, I have started
                            writing SEO-friendly blogs on my own website!
                          </p>
                        </Card>
                      </Col>
                      <Col span={12}>
                        <Card>
                          <div style={{ display: "flex" }}>
                            <img
                              src="umesh.png"
                              style={{ borderRadius: "50%" }}
                            />
                            <div style={{ marginTop: "30px" }}>
                              <h
                                style={{
                                  font: "20px proximanova-bold",
                                  color: "#444444",
                                }}
                              >
                                &nbsp;&nbsp;Umesh
                              </h>
                              <br />
                              <h level={5}>
                                &nbsp;&nbsp;Indiral Open University
                              </h>
                              <br />
                              &nbsp;&nbsp; <Rate allowHalf defaultValue={3.5} />
                            </div>
                          </div>
                          <p>
                            In the 6 weeks of the Digital Marketing training,
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
                              src="ashmit.png"
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
                            digital marketing.
                          </p>
                        </Card>
                      </Col>
                      <Col span={12}>
                        <Card>
                          <div style={{ display: "flex" }}>
                            <img
                              src="ashish.png"
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
                            This training program offered by Internshala is the
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

      <div style={{ backgroundColor: "", color: "white" }}>
        <div
          style={{
            marginTop: "30px",
            marginLeft: "106px",
            backgroundColor: "",
            color: "#2D22D",

          }}
        >
          
        </div>
      </div>
     <Footer/>
    </div>
  );
}