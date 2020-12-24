import React from 'react'
import { Typography,Image,Card,Button} from 'antd';
import Nav from './Nav';

const { Title } = Typography;
const {Text} = Typography;

export default function Teacher1() {
    return (
        <div>
            <Nav/>
                 <div style={{marginLeft:'600px',marginTop:'150px',marginBottom:'50px'}}><Title >Our Experts</Title></div>
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
        src="NSIR.jpg"
        style={{borderRadius:'50%'}}
      />
    }
   
  >
    <Title level={4}><b>Nasir Bhati</b><br/>
    
          Digital Marketing Expert<br/>
    <Button style={{backgroundColor:'black',color:'white'}}>12+ year Experience</Button>
    </Title>
  </Card>
   </div>
   
      
   <div style={{marginLeft:'90px'}}>  <Card style={{width:'100%'}}
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
    
    Digital Marketing Expert<br/>
    <Button style={{backgroundColor:'black',color:'white'}}>6+ year Experience</Button>
    </Title>
  </Card>
   </div>
        </div>
        </div>
    )
}
