import React from 'react'
import { Button, Col, Row, Tag } from 'antd';
import { Typography } from 'antd';
import './IntroCard.css';
import CompanyLogo from '../../../Company/CompanyLogo';
import Logo from '../../../Illustrations/Logo';
import {  FaHandshake } from 'react-icons/fa';
import OnTheBeach from '../../../Company/Company';
import ItsAMatch from '../../../Illustrations/ItsAMatch';
import Company from '../../../Company/Company';
const { Title, Text } = Typography;

const IntroCard = () => {
  return (
    <Row className="IntroCard">
                <Col span={8} className="Column1">
                  <div className="LogoContainer">
                  <Logo />
                  </div>
                  
                    <Title level={3}>Miles Walker</Title>
                   
                    <Tag color="#2196F3">Looking: Product Designer Role</Tag>
                </Col>
                <Col span={8} className="Column2">
                    <div className="relationship">
                    <ItsAMatch />
                    </div>
                </Col>
                <Col span={8} className="Column3">
                <div className="LogoContainer">
                    <CompanyLogo />
                  </div>
                  <Title level={3}><Company variant={'companyname'} /></Title>
                  <Tag color="#00E676">Hiring: Product Designers</Tag>
                  
                </Col>
           </Row>
  )
}

export default IntroCard
