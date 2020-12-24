import React from 'react'

import Link from 'next/link'


export default function Nav2() {
    return (
        <div>

       

            <div className="card-container" style={{ width: '100%', top: '0px', display: 'flex', margin: '0px', backgroundColor: '#F6F6F6	', marginTop: '0px', padding: '25px', color: '#666666', top: '0px', fontFamily: 'sans-serif', font: '18px proximanova-regular', color: 'black', top: '0', top: '0px', zIndex: '999', marginLeft: '45px', position: 'fixed' }}>
     <Link href="/Main"><img src="logo.png" style={{width:'150px'}}/></Link>
                <div style={{ width: '13%', marginLeft: '20px' }}><Link href="/Home1"><a>Home</a></Link></div>

                <div style={{ width: '13%', marginLeft: '20px' }}><Link href="/Certificate1"><a>Certificate</a></Link></div>
                <div style={{ width: '13%', color: 'black', marginLeft: '20px' }}><Link href="/Placement1"><a>Placement</a></Link></div>



                <div style={{ width: '13%', marginLeft: '20px' }}><Link href="/Syllabus1"><a>Syllabus</a></Link></div>


                <div style={{ width: '13%', marginLeft: '20px' }} >  <Link href="/Teacher1"><a>Teacher</a></Link></div>
                <div style={{ width: '13%', marginLeft: '20px' }} >  <Link href="/Review1"><a>Review</a></Link></div>
                {/* <div style={{width:'15%'}} >  <Link href="/Signup"><a>Signup</a></Link></div> */}


            </div>

        </div>
    )
}