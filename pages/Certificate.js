import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Card, Col, Row } from 'antd';
import { Image } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const {Text} = Typography;

export default function Certificate() {
  return (
    <div >
      <Nav />

      <div style={{ marginTop: '200px' }}>
      <Title level={3} style={{marginLeft:'400px',marginBottom:'80px'}}>How will Get your Certificate</Title>
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
    </div>
  )}