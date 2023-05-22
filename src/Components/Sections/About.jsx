import { Col, Row } from 'antd'
import React from 'react'
import { FaMale } from 'react-icons/fa'
import TitleBar from '../TitleBar/TitleBar'

const About = () => {
  return (
    <div className="PageGrid">
      <Row gutter={16}>
        <Col span={24}>
        <TitleBar title={'About Me'} icon={<FaMale />} />
        </Col>
      </Row>
    </div>
  )
}

export default About
