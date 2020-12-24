import React from 'react'
import Nav3 from './Nav3'
import { Typography,Image,Card,Button} from 'antd';

const { Title } = Typography;
export default function Teacher2() {
    return (
        <div>
         <Nav3/>            <div style={{marginLeft:'600px',marginTop:'150px',marginBottom:'50px'}}><Title >Our Experts</Title></div>
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
    Cofounder of Nb Digital Technology<br/>
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
    
    Digital Marketing Expert<br/>
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
    
    Zoho Crm Expert<br/>
    <Button style={{backgroundColor:'black',color:'white'}}>6+ year Experience</Button>
    </Title>
  </Card>
   </div>  
        </div></div>
    )
}
