import { Col, Row } from 'antd'
import React from 'react'
import { FaOctopusDeploy } from 'react-icons/fa'
import TitleBar from '../TitleBar/TitleBar'

const Skills = () => {
  return (
    <div className="PageGrid">
      <Row gutter={16}>
        <Col span={24}>
        <TitleBar title={'My Skills'} icon={<FaOctopusDeploy />} />
        </Col>
      </Row>
    </div>
  )
}

export default Skills
