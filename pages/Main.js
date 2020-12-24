import React from 'react'

import Link from 'next/link'
import Nav from './Nav'
import Home from './Home'
import LearnzohoCrm from './LearnzohoCrm'
import { Descriptions, Badge } from 'antd';


import { StarOutlined, BehanceSquareOutlined, DownloadOutlined, TeamOutlined, CalendarOutlined, SyncOutlined, HomeOutlined, SafetyCertificateOutlined, VideoCameraOutlined, BulbOutlined, MessageOutlined, CheckOutlined } from '@ant-design/icons';
import { Steps, Popover } from 'antd';
import { Typography } from 'antd';


const { Step } = Steps;

import { Card, Col, Row } from 'antd';
import Nav1 from './Nav1'
import { Button } from 'antd'
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
} from 'antd';
'react'

import { Tabs, Space } from 'antd';
import { Divider } from 'antd';
import { Collapse, Carousel, Rate } from 'antd';


const { TabPane } = Tabs;
const { Text } = Typography;







import { Image } from 'antd'

import { Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Main() {
  return (
    <div style={{ overflowX: 'hidden' }} >
 
      <Nav1/>
      <div style={{ marginTop: '200px', marginBottom: '100px', marginLeft: '120px' }}>

        <div style={{ display: 'flex', paddingTop: '50px', paddingBottom: '50px', paddingLeft: '0px', paddingRight: '80px',marginTop: '200px', }}>
          <div>




           <Card style={{borderRadius:'1pxsolid',color:'black',width:'100%'}}> <img src="Digital.jpg" style={{width:'300px',borderRadius:'10px'}}/></Card>
            <br /><br /><br/><br/>
          <Card style={{width:'100%'}}>  <Card style={{backgroundcolor:'blue',color:'black',border:'1px solid'}}>
              <Link href="/LearnDigitalMarketing"><Title style={{backgroundcolor:'blue',color:'green'}} level={4}>Learn Digital Marketing</Title></Link>
       </Card>
            <Title level={4}><br />
                <br/>
              <CheckOutlined style={{ color: 'green' }} />        Become an ace digital marketer
              <br /> - learn Google Analytics, SEO,
              <br /> Social Media Marketing,
              <br /> Email Marketing, and more &nbsp; <br />
              <CheckOutlined style={{ color: 'green' }} />Social media marketing<br /><br/><br/>
              <Link href="/LearnDigitalMarketing"><Button style={{ color: 'white', backgroundColor: 'green', borderRadius: "5px" }}>Learn More</Button></Link>

            </Title>
            <br />

            </Card>

          </div>
          <div style={{ marginLeft: '40px',paddingBottom:'40px',paddingRight:'80px',width:'50%' }}>

          
          <Card style={{width:'300px'}}><img src="ZohoCRM.jpg" style={{width:'280px',borderRadius:'10px'}} /></Card>  
               <br/><br/><br/><br/><br/>
            <Card style={{width:'100%',marginBottom:'50px'}}>   <Card style={{width:'100%',border:'1px solid'}}>
          <Link href="/LearnzohoCrm"><Title style={{backgroundcolor:'blue',color:'red'}} level={4}>Learn Zoho Crm</Title></Link> 
                </Card>           

             
            <Title style={{marginBottom:'50px'}} level={4}>
               <br /><br/><CheckOutlined style={{ color: 'red' }} />  Zoho CRM streamlines the day-to-day operations<br />
                             of thousands of businesses around the globe, every <br />
                             single day.
<br />
               <br/><br/>
              <Link href="/LearnzohoCrm"><Button style={{ color: 'white', backgroundColor: 'red', borderRadius: '5px' }}>Learn More</Button></Link>

            </Title>
          

            </Card>
          
          </div>
          <div style={{ paddingLeft:'0px',paddingRight:'400px',width:'100%' }}>

           <Card><img src="ZohoBooks.jpg" style={{width:'300px',borderRadius:'10px'}}/></Card>
            <br /><br /><br/><br/><br/> <Card style={{width:'100%'}}><Card style={{border:'1px solid'}}>            
            <Link href="/ZohoBooks"><Title style={{backgroundcolor:'blue',color:'blue'}} level={4}>Learn Zoho Books</Title></Link>
</Card>
            <Title level={4}><br/>
              <br /><CheckOutlined style={{ color: 'blue' }} />-  Whether you're a student, working professional,<br/> or business owner, join the most comprehensive course on cloud accounting with Zoho Books<br/><br />
               
                <Link href="/ZohoBooks"><Button style={{ color: 'white', backgroundColor: 'blue', borderRadius: '5px' }}>Learn More</Button></Link>
               <br/><br/>
            </Title>


            </Card>

          </div>


        </div>
      </div>
      





      <div style={{ color: 'white', backgroundColor: 'grey', marginTop: '100px' }}>

        <Descriptions layout="vertical" style={{ marginLeft: '80px', backgroundColor: '', color: 'white', marginBottom: '50px', marginRight: '80px' }}>
       <Descriptions.Item label="Digital Marketing">Advance Excel<br />Seo<br />Learn Startup<br />Financial modelling and evaluation
          </Descriptions.Item>
          <Descriptions.Item label="Crm">zohocrm<br />Graphic design<br />UI/Ux design</Descriptions.Item>
          <Descriptions.Item label="Accounting">Zoho books<br />Bussiness communication skills<br />Internship & job opportunities</Descriptions.Item>



        </Descriptions>

      </div>

      </div>







   




  )
}