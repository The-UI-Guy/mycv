import { Button, Col } from 'antd'
import Title from 'antd/es/skeleton/Title'
import React from 'react'

const TableOfContents = ( { text, href, Icon } ) => {
  return (
    <Col span={4} className="TableOfContent">
    <h2>Table of content</h2>
    <a href={href}>{Icon}{text}</a>
  </Col>
  )
}

export default TableOfContents
