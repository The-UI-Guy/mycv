import { Col, Divider, List, Row, Tag } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import './ExperienceCard.css'
import { BiCalendar } from 'react-icons/bi'

const ExperienceCard = ({ id, title, company, current, date, description, listitem1, listitem2, listitem3, listitem4, listitem5, listitem6, listitem7, tagcolor }) => {
  return (
    <div className="ExperienceCard" id={id}>
      <Row className="TitleRow">
        <Col span={12}>
          <h2 className="JobTitle" level={2}>{title}</h2>
          <h5 className="Company" level={4}>{company}</h5>
         
          {current && (<Tag color="#F01D39">Current</Tag>)}
        </Col>
        <Col span={12} className="ColumnLeft">
        <div class="dates"><p>{date}</p><BiCalendar className='Icon' /></div>
        
        </Col>
        </Row>
        
        
        {description && (<Row className="BodyRow"><p>{description}</p> </Row>)}
       
      
     
      
      <Row className="List">
      <h2 className="responisbilities">Responsibilities</h2>
        <List>
       
        {listitem1 && (<List.Item>{listitem1}</List.Item>)}
        {listitem2 && (<List.Item>{listitem2}</List.Item>)}
        {listitem3 && (<List.Item>{listitem3}</List.Item>)}
        {listitem4 && (<List.Item>{listitem4}</List.Item>)}
        {listitem5 && (<List.Item>{listitem5}</List.Item>)}
        {listitem6 && (<List.Item>{listitem6}</List.Item>)}
        {listitem7 && (<List.Item>{listitem7}</List.Item>)}
      
       
        </List>
     
      

      </Row>
     
     
     

    </div>
  )
}

export default ExperienceCard
