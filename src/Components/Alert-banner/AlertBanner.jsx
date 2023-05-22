import { Button, Row, Tag } from 'antd'
import React from 'react'
import { BiMeteor } from 'react-icons/bi'
import './alertbanner.css'
import Link from 'antd/es/typography/Link'

const AlertBanner = () => {
  return (
  
      <Row span={24} className='AlertBanner'>
        <Tag className='tag' icon={<BiMeteor spin />}>New</Tag>A new Project has landed - The UI Guy <Link className='link'>See More</Link>
        
      </Row>
  
  )
}

export default AlertBanner
