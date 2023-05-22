import React from 'react'
import TitleBar from '../../TitleBar/TitleBar'
import { FaHandSpock } from 'react-icons/fa'
import Insert from '../Insert'
import { Anchor, Col, Divider, Row } from 'antd'
import { ExperienceCard, Intro, MatchCard } from '../../Sections/Components'
import Title from 'antd/es/typography/Title'
import { BiAlarm, BiAtom, BiBriefcase, BiBriefcaseAlt, BiBulb, BiHomeAlt, BiMailSend, BiUserCircle } from 'react-icons/bi'
import DashboardCard from '../../Cards/DashboardCard'
import Card1 from '../../../Gallery/Dashboard/card1.svg'
import TitleCard from '../../../Gallery/Dashboard/titlecard.svg'
import SkillCardimg from '../../../Gallery/Dashboard/skillcard.svg'
import './ContactInsert.css'
import TableOfContents from '../../TableOfContents/TableOfContents'
import { NavLink } from 'react-router-dom'
import Link from 'antd/es/typography/Link'
import Skillcard from '../../../Gallery/Dashboard/skillcard.svg'
import Expcard from '../../../Gallery/Dashboard/experiencecard.svg'
import Aboutcard from '../../../Gallery/Dashboard/aboutcard.svg'
import Projectcard from '../../../Gallery/Dashboard/project-card.svg'


const ContactInsert = () => {
  return (
    <div>
      <TitleBar title={'Contact Me'} icon={<BiMailSend />} />
     
      <Row gutter={16}>
      <Col span={24} className='gutter-row'>
        <div className="Insert ContactInsert">
        <h5>I'd love to hear from you</h5>
        <div className='contactlinks'>
          <Link href='mailto:miles@miles-walker.co.uk'><BiMailSend />Email: <span>miles@miles-walker.co.uk</span></Link>
          <Link href='tel:07930599633'><BiMailSend />Call: <span>07930599633</span></Link>
        </div>
        <Row className="cards" gutter={24}>
        <Col span="12" className='gutter-row'><DashboardCard title="Projects" body="See what i've been working on" image={Projectcard} route="/projects" /></Col>
        <Col span="12" className='gutter-row'><DashboardCard title="My Skills" body="How I do what I do" image={Skillcard} route="/skills" /></Col>
        <Col span="12" className='gutter-row'><DashboardCard title="My Experience" body="The Journey so far" image={Aboutcard} route="/experience" /></Col>
        <Col span="12" className='gutter-row'><DashboardCard title="About me" body="Find out more about me" image={Expcard} route="/about" /></Col>
      
      
      
      
      </Row>
        </div>
    
      </Col>

      </Row>
      

  

    </div>
  )
}

export default ContactInsert
