import { Button, Col, Row, Tag } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { FaFigma } from 'react-icons/fa'
import './Title.css'

const TitleBar = ({href, title, icon, tag, tag2, tag3, greeting, recipientname, tagcolor, tag2color, tag3color, subtitle, buttontext, buttonicon, buttontype}) => {
  
  return (
    <div className="TitleBar">
  
        <Col span={12}>
        <div className="TitleAndTags">
        <div className='icon'>{icon}</div>
         
          {title && (<Title>{title}</Title>)}
          {greeting && (<Title className='greeting'>{greeting}<span classname="name">{recipientname}</span></Title>)}
          <div className="Tags">
          {tag && (<Tag color={tagcolor}>{tag}</Tag>)}
          {tag2 && (<Tag color={tag2color}>{tag2}</Tag>)}
          {tag3 && (<Tag color={tag3color}>{tag3}</Tag>)}
          </div>
          
      </div>
      <div className="subtitle">
      <p level={5}>{subtitle}</p>
      </div>
        </Col>
        <Col span={12} className="Buttons">
          {buttontext && (<Button href={href} value="large" className={buttontype}>{buttontext}{buttonicon}</Button>)}
        </Col>

   
    
  
    
    </div>
  )
}

export default TitleBar
