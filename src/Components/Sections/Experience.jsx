import { Col, Row } from 'antd'
import React from 'react'
import { ExperienceCard, Intro } from './Components'

const experiencedata = [
  {title: 'Lerprass'}

];

const Experience = () => {
  return (
    <div className='ExperienceSection'>
      experience
      <Row gutter={16}>
        <Col span={24}>
        titlennskwnkwsnw
        <ExperienceCard experiencedata={experiencedata} />
       
        </Col>
      </Row>
    </div>
  )
}

export default Experience

