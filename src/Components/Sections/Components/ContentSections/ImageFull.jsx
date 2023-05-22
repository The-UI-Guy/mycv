import React from 'react'
import { Button, Col, Row, Tag } from 'antd'
import './contentsection.css'

const myStyle={
    backgroundImage: 
"url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const ImageFull = ({imagefull, span}) => {
  return (
    
    <Row>
    <Col span={span}>
    <div className="ImageFull" style={{ backgroundImage: `url(${imagefull})` }}>
     
    </div>
    </Col>
    </Row>
  )
}

export default ImageFull
