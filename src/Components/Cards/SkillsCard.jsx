import { Col } from 'antd'
import React from 'react'
import './Skills.css'

const SkillsCard = ({ title, body, Icon }) => {
  return (
   
    <Col span={8} className="SkillCardColumn">
     <div className="SkillCard">
     {Icon}
     <h5 className='title'>{title}</h5>
     <p className='body'>{body}</p>
    </div>
    </Col>
  )
}

export default SkillsCard
