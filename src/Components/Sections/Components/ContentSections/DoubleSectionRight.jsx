import React from 'react'
import { Button, Col, Row, Tag } from 'antd'
import Title from 'antd/es/typography/Title'

const DoubleSectionRight = ({title, subtitle, body, button, tag, image }) => {
  return (
    <Row>
        <Col>
            {title && (<Title level={3}>{title}</Title>)}
            {subtitle && (<Title level={5}>{subtitle}</Title>)}
            {tag && (<Tag>{tag}</Tag>)}
                <div className="Copy">
                    {body && (<p>{body}</p>)}
                    {button && (<Button>{button}</Button>)}  
                </div>
        </Col>
        <Col span={12}>         
        {image && (<img src={image} />)}
        </Col>
    </Row>
  )
}

export default DoubleSectionRight
