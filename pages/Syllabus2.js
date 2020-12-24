import React from 'react'
import {Typography} from 'antd'
import {Collapse} from 'antd'
import Nav3 from './Nav3'
const { Title } = Typography;
const {Text} = Typography;
const { Panel } = Collapse


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


export default function Syllabus2() {
    return (
        <div>
          <Nav3/>
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
  
        </div>
    )
}
