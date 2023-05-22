import { Button, Col, Row, Menu, Anchor } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { FaFigma, FaVial } from 'react-icons/fa'
import TitleBar from '../TitleBar/TitleBar'
import { ProjectCard } from './Components'
import { BiAtom, BiBriefcaseAlt, BiHomeAlt, BiMailSend, BiUserCircle, BiVial } from "react-icons/bi";
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import ProjectCalendar from '../Sections/ProjectCalendar';
import ProjectUIGuy from '../Sections/ProjectUIGuy';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="PageGrid">
    
       <Row gutter={16}>
        <Col span={24}>
        <TitleBar 
        title={'UI Calendar'} 
        icon={<FaVial />} 
        subtitle="Commniuty Project"
        tag="Figma Community"
        tag2="Component Library"
        tagcolor="blue"
        tag2color="green"
        buttontext="Download on Figma"
        buttonicon={<FaFigma />}
        buttontype="btnblack"
        href="https://www.figma.com/file/xBSztANXPA3RWP3jMEScNE/%F0%9F%93%86-Responsive-Calendar%F0%9F%91%8D%F0%9F%91%BB-(Community)?type=design&node-id=0%3A1&t=aBOspE2ef8ifFKB4-1"
        />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={20}>
        <ProjectCard />
        </Col>
        <Col span={4} className="secondarynav">
        
        <Anchor
   
   affix={false}
   items={[
       {
         key: '1',
         href: '#1',
         title: 'Intro',
       },
       {
         key: '2',
         href: '#2',
         title: 'Open Source',
       },
       {
         key: '3',
         href: '#3',
         title: 'Popularity',
       },
       {
         key: '4',
         href: '#4',
         title: 'Themes',
       },
    
   
     ]}
   />
        </Col>
      </Row>
    
    </div>
  )
}

export default Projects
