import React from 'react'
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
    LinkedinOutlined,
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined
} from "@ant-design/icons";
const { Meta } = Card;
import { Steps, Popover } from "antd";

const { Step } = Steps;
import Nav3 from './Nav3';

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
        <ul>
                
      <li>History of accounting</li>  - 
<li>Evolution of accounting</li>- 
<li>The rise of the cloud era</li>- 
<li>Introduction to Zoho Finance</li>- 
<li>What is Zoho Books?</li>
           

        </ul>
    </p>
);
const text1 = (
    <ul>
   <li>- Setting up your account</li>     
   <li> Handling opening balances</li>
  <li> Keying in GST details</li>
<li> Recording sales and purchases</li>
<li>- Managing e-way bills, BOE, and challans</li>

    </ul>
);
const text2 = (
    <ul>
       <li>Project billing and its types</li> 
<li>- Introduction to connected banking</li>
<li>- Reconciling bank accounts</li>
<li>- Generating financial reports</li>
<li>- Filing your first GST return</li>

    </ul>
);
const text3 = (
    <ul>
 
 <li>Advantages of an integrated system</li>
<li>- Extending your Zoho Books account</li>
<li>- Automating repetitive tasks</li>
<li>- Personalizing using custom functions</li>
<li>- Eliminating data entry with auto scans</li>
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

export default function Home2() {
    return (
        <div>
            <Nav3 />
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
                                        }}
                                    >
                                        {" "}₹
                                    
                                        <Text delete>₹4499</Text>&nbsp;&nbsp;₹ 3339 valid till Jan
                  </span>
                                    <br></br><br/><br/><br/>
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
                            Learn Zoho<br/>
                            Books
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
                         
                         Whether you're a student, working professional,<br/> or business owner, join the most comprehensive<br/> course on cloud accounting with Zoho Books<br/> and get certified by a team of professional<br/> trainers.

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
                                borderRadius:'20px',
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
                ></Title>
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
                            From ZOHO Trainings
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
                </div>
                <div style={{ display: "flex", marginTop: "30px" }}>
                    <img style={{ width: "50px" }} src="video.png" />
          &nbsp;&nbsp;
          <Title style={{ font: "20px proximanova-bold", color: "#444444" }}>
                        {" "}
                        <b>video tutorials</b>
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
                        <b>Build  projects</b>
                        <br />
                        <Text
                            style={{ font: "16px proximanova-regular", color: "#444444" }}
                        >
                            For hands-on practice
            </Text>
                    </Title>
                    <img
                        style={{ width: "50px", marginLeft: "150px" }}
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



            </div>



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
                  Take the final exam online to complete the Zoho Books{" "}
                   Training after which you will be able to download your
                  certificate from Zoho Crm Trainings
                </Text>
                .
              </div>
                    </Col>
                    <Col span={12}>
                        <Image width={350} src="zbooks.jpg" />
                    </Col>
                </Row>
            </div>
            <div style={{ paddingRight: '10px', paddingLeft: '10px', marginRight: '10px', marginLeft: '10px' }}>
                <div style={{ marginTop: '80px', marginLeft: '40px', marginRight: '40px', paddingLeft: '40px', paddingRight: '40px', width: '90%', paddingBottom: '40px' }}>
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
                    <h style={{ font: '28px proximanova-bold', color: '#444444', paddingTop: '20px', marginLeft: '400px' }}><b>Why we learn Zoho Crm</b></h></div>

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

            <div style={{ backgroundColor: "#FCF5FF", marginTop: '40px', marginBottom: '40px', paddingLeft: '40px', paddingRight: '40px', width: '90%', marginLeft: '80px' }}>
                <div style={{ backgroundcolor: "#f8f8f8", marginLeft: "380px" }}>
                    <Title style={{ font: '28px proximanova-bold', color: '#444444', paddingTop: '40px', paddingBottom: '40px' }} level={5}><b>How will your doubt get solved</b></Title>
                    <img src="doubt1.png" style={{ width: "80px", margintop: "180px" }} />
                    <Text style={{ display: "inline-block" }}>
                        You can post your doubts on the Q&A forum{" "}<br />
              which will be answered by the teachers within 24 hours.
            </Text>
                </div></div>
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
    Zoho book expert<br/>
    Digital Marketing Expert<br/>
    <Button style={{backgroundColor:'black',color:'white'}}>8+ year Experience</Button>
    </Title>
  </Card>
   </div>
   
   <div style={{marginLeft:'90px'}}>  <Card style={{width:'100%'}}
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="dheeraj.jpg"
        style={{borderRadius:'50%'}}
      />
    }
   
  >
    <Title level={4}><b>Dheeraj Sharma</b><br/>
    
    Zoho Book Expert<br/>
    <Button style={{backgroundColor:'black',color:'white'}}>6+ year Experience</Button>
    </Title>
  </Card>
   </div>
   
      
   <div style={{marginLeft:'90px'}}>  <Card style={{width:'100%'}}
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="ankita.jpg"
        style={{borderRadius:'50%'}}
      />
    }
   
  >
    <Title level={4}><b>Akita Pal</b><br/>
    
    Zoho Book & Crm Expert<br/>
    <Button style={{backgroundColor:'black',color:'white'}}>6+ year Experience</Button>
    </Title>
  </Card>
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
                            header="Introduction"
                            key="1"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text}</div>
                        </Panel>
                        <br />
                        <br />

                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header="Basics"

                            key="2"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text1}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header="Essentials "
                            key="3"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text2}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" : Advanced"

                            key="4"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text3} </div>
                        </Panel>
                        <br />
                        <br />
                      

                    </Collapse>




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
       <Footer/>
        </div>
    )
}