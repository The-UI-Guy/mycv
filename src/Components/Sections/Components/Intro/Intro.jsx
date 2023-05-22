import React from 'react'
import CompanyLogo from '../../../Company/CompanyLogo'
import { Col, Divider } from 'antd'
import Title from 'antd/es/typography/Title'
import Company from '../../../Company/Company'
import { Typography } from 'antd';
import { Avatar, List } from 'antd';
import './Intro.css';
const { Paragraph } = Typography;
const companydata = [
  {
    title: 'Own end to end product design process',
  },
  {
    title: 'Take broad, conceptual ideas and turn them into useful and valuable solution for our customers',
  },
  {
    title: 'Design flows and experiences',
  },
  {
    title: 'Partner with PMs, engineers, researchers and marketers to oversee user experience of the product from conception until launch',
  },
  {
    title: 'Monitor the user experience on ongoing basis using data (quant and qual) and propose improvements',
  },
  {
    title: 'Interpret research findings into actionable outputs that meet users needs',
  },
  {
    title: 'Test assumptions with experiments and validate concepts through user research.',
  },
  {
    title: 'Maintain detailed user flows, product maps, and mock-ups for clear communication of the intent of a design decision.',
  },
  {
    title: 'Build complex prototypes for user testing.',
  },
];
const data = [
  {
    title: 'End to end experience with projects of all sizes',
    description: 'I have lead the design on small, admin style product features to large from the group up Product designs and everything in between.',
  },
  {
    title: 'Flexibility, adaptability and mobility',
    description: 'My current position is Head of Product Design for a scaleup Tech Company so I am no stranger to sliding goal posts. Whether its a fully mapped out Technical document or a verbal agreement, I can turn your ideas into wonderful design solutions.',
    
  },
  {
    title: 'DevoLingo',
    description: 'I understand the art of communication, especially when it comes to development environments. Stakeholders, Product Managers, Data Scientists, Testers, Designers - They all have their own language and I am fluent in them all. Products.',
  },
  {
    title: 'Analytical Mindset',
    description: ' I analyse and test features to see whether they meet the users requirements and suggest realistic solutions if not.',
  },
  {
    title: 'Component Design from the ground up',
    description: 'I am experienced with creating and maintaining granular design systems using the Atomic Design methodology to create reusable components. This enables me to build rapid design flows and mockups ups to a high standard.',
  },
  {
    title: 'People focused',
    description: ' I am emotionally intelligent and push people towards growth through motivation, inspiration and collaboration. I take time to get to know people and adapt myself to their unique communication styles to build a good relationship. Working as part of a supportive and collaborative team is my ideal environment.',
  },
  {
    title: 'Front End Experience',
    description: 'Html, Scss, Javascript and React',
  },
];


const Intro = () => {
  return (
    <Col span={24} className="IntroCard">
      <div className='Cover'>
        <CompanyLogo />
        <Title level={1} className="CoverTitle">Hello, <Company variant={'companyname'} /></Title> 
      </div>
      <div className="Title">
      <Title level={3} className="Title2">This could be the start of something great...</Title> 
      </div>
      <Divider />
      <div className='Content'>
       
      <Paragraph> Hello  <Company variant={'companyname'} />, my name is Miles and I would like to be your new <Company variant={'position'} />. I have over 8 years of experience designing magnificent User Interfaces and would love to collaborate with <Company variant={"companyanme"} /> to make UI magic!</Paragraph>
      <div className="Break"><Paragraph className="ListTitle">What you are looking for;</Paragraph></div>
     <List
    itemLayout="horizontal"
    dataSource={companydata}
    size="small"
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          title={<p className='BodyCopy'>{item.title}</p>}
          description={item.description}
        />
      </List.Item>
    )}
  />
      <div className="Break"><Paragraph className="ListTitle">What I have to offer;</Paragraph></div>
      <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
          title={<h5 className="BodyCopy">{item.title}</h5>}
          description={<p class="BodyCopy">{item.description}</p>}
        />
      </List.Item>
    )}
  />
      </div>
    
     
 
      
    </Col>
  )
}

export default Intro
