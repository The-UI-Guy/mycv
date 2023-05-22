import React from 'react'
import { Button, Col, Row, Tag } from 'antd'
import Title from 'antd/es/typography/Title'
import './DoubleSectionLeft.css'

const DoubleSectionLeft = ({title, subtitle, body, button, tag, image}) => {
  return (
    <div>
       <Row className="doublesectionleft">
            <Col span={12} className='column1'>
                {title && (<h2>{title}</h2>)}
                {subtitle && (<p className='subtitle'>{subtitle}</p>)}
                {tag && (<Tag>{tag}</Tag>)}
                    <div className="Copy">
                        {body && (<p className='body'>{body}</p>)}
                        {button && (<Button>{button}</Button>)}  
                    </div>
            </Col>
            <Col span={12} className='column2'>
                {image && (<img src={image} />)}
            </Col>
        </Row>
    </div>
  )
}

export default DoubleSectionLeft
