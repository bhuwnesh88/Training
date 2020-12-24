import React from 'react'
import Nav2 from './Nav2'
import {Typography} from 'antd'
import {Collapse} from 'antd'
const { Title } = Typography;
const {Text} = Typography;
const { Panel } = Collapse;

const text = (
    <p style={{ paddingLeft: 24 }}>
        <ul>

            <li>Personal settings</li>
            <li>Company details</li>
            <li>Gamescope</li>

        </ul>
    </p>
);
const text1 = (
    <ul>
        <li>Leads, contacts, accounts, deals, and campaigns
<br />Activities (tasks, events, and calls)</li>

    </ul>
);
const text2 = (
    <ul>
        <li>Email Marketing</li>
    </ul>
);
const text3 = (
    <ul>
        <li>Products, quotes, invoices, sales orders, purchase
<br />orders, price books, and vendors</li>

    </ul>
);
const text4 = (
    <ul>

        <li> Users</li>
        <li>Security control</li>
        <li>Compliance settings</li>
        <li>Territory management</li>


    </ul>
);
const text5 = (
    <ul>
        <li>All mass actions (emails, field updates,
        changing owner, converting, etc.)</li>
        <li>Macro actions</li>
        <li>Tags</li>
        <li>Merge duplicates</li>


    </ul>
);
const text6 = (
    <ul>


        <li>List view</li>
        <li>Kanban view</li>
        <li>Canvas view</li>
        <li>Advance filters</li>
        <li> Business card view</li>
        <li>Related list customization</li>


    </ul>
);
const text7 = (
    <ul>

        <li>Modules and fields</li>
        <li>Templates</li>
        <li>Wizards</li>
        <li>Pipelines</li>
        <li>  Copy customization
        Customize home page (three types of home screen)
        Translation</li>

    </ul>
);
const text8 = (
    <ul>

        <li>Emails</li>
        <li>Telephony</li>
        <li> Social</li>
        <li>Chats</li>
        <li>Signals</li>
        <li>Portals</li>

    </ul>
);
const text9 = (
    <ul>
        <li>Workflow and actions</li>
        <li>Schedules</li>
        <li>Assignments rules</li>
        <li>Case escalation rules</li>
        <li>Scoring rules</li>
        <li>  Marketing attribution</li>

    </ul>
);
const text10 = (
    <ul>

        <li>Blueprint</li>
        <li>Approval process</li>
        <li>Review process</li>
        <li>CommandCenter</li>



    </ul>
);
const text11 = (
    <ul>

        <li>Import (module specific and data migration
        from other CRM)</li>
        <li>Export</li>
        <li>Data backup</li>
        <li>Storage (documents)</li>
        <li>Recycle bin</li>
        <li>Audit log</li>


    </ul>
);
const text12 = (
    <ul>

        <li> All</li>
        <li>Zoho</li>
        <li>Google</li>
        <li>Microsoft</li>

    </ul>
);
const text13 = (
    <ul>

        <li>Reports and dashboards</li>
        <li>Forecasts</li>
        <li>feeds</li>



    </ul>
);
const text14 = (
    <ul>

        <li>Webforms and analytics</li>
        <li>Webform A/B testing</li>



    </ul>
);
const text15 = (
    <ul>

        <li>CRM mobile app</li>

    </ul>
);
const text16 = (
    <ul>

        <li> Single sign-on (SAML)</li>
        <li>Security policies</li>
        <li>Active directory sync</li>
        <li>Login history</li>



    </ul>
);


export default function Syllabus1() {
    return (
        <div>
            <Nav2/>
            <div
                style={{
                    width: "80%",
                    height: "",
                    margintop: "200px",
                    marginLeft: "120px",
                    paddingTop: '120px',
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
                <div style={{ fontSize: "50px", margintop: "380px", paddingTop: '80px', }}>
                    <Collapse bordered={false} defaultActiveKey={["1"]}>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header="General"
                            key="1"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text}</div>
                        </Panel>
                        <br />
                        <br />

                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header="Sales Process Automation"

                            key="2"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text1}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header="Inventory Management"
                            key="3"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text2}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Users and Control"

                            key="4"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text3} </div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header="User Interface"
                            key="5"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text4}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Basic Customization
                                                                 "
                            key="6"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text5}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Advanced Customization"
                            key="7"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text6}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Channels"
                            key="8"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text6}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Automation"
                            key="9"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text7}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Module 11 Process Management"
                            key="10"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text8}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Data Administration"
                            key="11"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text9}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Data Administration"
                            key="12"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text10}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Marketplace"
                            key="13"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text11}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Other Modules"
                            key="14"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text12}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Zoho Directory
"
                            key="15"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text13}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Module 18 Zia in Zoho CRM
"
                            key="16"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text14}</div>
                        </Panel>
                        <br />
                        <br />
                        <Panel
                            style={{ font: '24px proximanova-bold', color: '#444444' }}
                            header=" Module 19 Accounts Security
"
                            key="17"
                        >
                            <div style={{ font: '18px proximanova-regular', color: '#444444' }}>{text15}</div>
                        </Panel>
                        <br />
                        <br />

                    </Collapse>
                </div>
            </div>   
        </div>
    )
}
