import React from 'react'
import { Button, Col, Row, Tag } from 'antd'
import './ImageContained.css'

const ImageContained = ({image, span, title, id, body, tag, color }) => {
  return (
    <Row className="ImageContained" id={id}>
    <Col span={span}>
      <div className='title'>
  
        {title && (<h2>{title}</h2>)}
       
        {body && (<p>{body}</p>)}
        {tag && (<Tag color={color}>{tag}</Tag>)}
        </div>
    <div>
      {image && (<img src={image} />)}
    </div>
    </Col>
    </Row>
  )
}

export default ImageContained
