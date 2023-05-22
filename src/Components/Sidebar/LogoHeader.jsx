import React from 'react'
import Logo from '../Illustrations/Logo'
import { Tag, Typography } from 'antd';

const { Title, Text } = Typography;

const LogoHeader = () => {
  return (
    <div className="LogoHeader">
      <Logo />
      <div className="LogoHeaderText">
      <Title level={4} className="sidebarTitle">Miles Walker</Title>
      <Tag className="sidebarJobTitle">Lead Product Designer</Tag>
      
      </div>
    </div>
  )
}

export default LogoHeader
