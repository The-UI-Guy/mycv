import React from 'react'
import { Col, Row } from 'antd';
import {Styles} from './Styles';
import { Intro, IntroCard, MatchCard } from './Components';




const Dashboard = () => {
    const classes = Styles();
    return (
        <>
        <Row gutter={16}>
          <Col span={8}>
            <MatchCard />
           
          </Col>
          <Col span={16}>
           <Intro />
          </Col>
        </Row>
        <Row className='HorzontalRow-16'>
          
        <Col span={16}><Intro /></Col>
        <Col span={8}> </Col>
        
        </Row>
        <Row className='HorzontalRow-16'>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row className='HorzontalRow-16'>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row className='HorzontalRow-16'>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </>
    )
    };
export default Dashboard;