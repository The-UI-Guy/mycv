import React from 'react'
import { Button, Col, Row, Tag } from 'antd'
import Title from 'antd/es/typography/Title'
const SingleSection = ({title, subtitle, body, button, tag, color, id }) => {
  return (
    <div className="SingleSection" id={id}>
            <Row>
                <Col>
                {title && (<Title level={2}>{title}</Title>)}
                {subtitle && (<Title level={5}>{subtitle}</Title>)}
                {tag && (<Tag color={color}>{tag}</Tag>)}
                <div className="Copy">
                    {body && (<p>{body}</p>)}
                    {button && (<Button>{button}</Button>)}
                    
                </div>
                </Col>
            </Row>

        </div>
  )
}

export default SingleSection
