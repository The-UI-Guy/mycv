import { Col, Row } from 'antd'
import React from 'react'
import { FaMobile } from 'react-icons/fa'
import TitleBar from '../TitleBar/TitleBar'

const Contact = () => {
  return (
    <div className="PageGrid">
    <Row gutter={16}>
      <Col span={24}>
      <TitleBar title={'About Me'} icon={<FaMobile />} />
      </Col>
    </Row>
  </div>
  )
}

export default Contact
