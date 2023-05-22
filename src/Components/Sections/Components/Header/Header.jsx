import { Button, Col, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import './Header.css'

const Header = ({className, Slide1Text, Slide1Type, BtnText, backgroundGraphic, BtnTextColor }) => {
  return (
    <div className={className}>
      <Row >
      <Col span={10} className="content">
        <Title level={1}>{Slide1Text}</Title>
          <p>{Slide1Type}</p>
     
        
        </Col>
        <Col span={14} className="image">
        {backgroundGraphic && (<img src={backgroundGraphic} />)}
        </Col>
        
     
      </Row>
    </div>
  )
}

export default Header
