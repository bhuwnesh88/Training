import React from 'react'
import {Card} from 'antd'
import Link from "next/link";

import { Descriptions } from 'antd';
const gridStyle = {
  width: '20%',
  textAlign: 'center',
};

export default function Footer() {
    return (

        <div style={{}}>
 <div style={{ color: 'white', backgroundColor: 'grey', marginTop: '100px',color:'white' }}>

        <Descriptions layout="vertical" style={{ marginLeft: '80px', backgroundColor: '', color: 'white', marginBottom: '50px', marginRight: '80px' }}>
       <Descriptions.Item label="Digital Marketing">Advance Excel<br />Seo<br />Learn Startup<br />Financial modelling and evaluation<br/>Email Marketings
          </Descriptions.Item>
          <Descriptions.Item label="Crm">zohocrm<br />Graphic design<br />UI/Ux design</Descriptions.Item>
          <Descriptions.Item label="Accounting">Zoho books<br />Bussiness communication skills<br />Internship & job opportunities</Descriptions.Item>
          <Descriptions.Item label="Services"> Digital Marketing<br/>
 Website Development<br/>
 Facebook Marketing<br/>
 Google PPC
<br/>   </Descriptions.Item>

<Descriptions.Item label="Address"><br />ADDRESS :
36inc,3rd floor ,
City Central Mall,Pandri Raipur (C.G)
<br/>
support@nbdigitech.com
<br/>
+91 97546 00742
<br/>
+91 97138 88846<br /></Descriptions.Item>





        </Descriptions>

      </div>
        </div>
    )
}
