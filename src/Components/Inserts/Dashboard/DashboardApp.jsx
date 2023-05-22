import React from 'react'
import TitleBar from '../../TitleBar/TitleBar'
import { FaHandSpock } from 'react-icons/fa'
import Insert from '../Insert'
import { Col, Divider, Row } from 'antd'
import { Intro, MatchCard } from '../../Sections/Components'
import Title from 'antd/es/typography/Title'
import './DshboardApp.css'
import { BiAlarm } from 'react-icons/bi'
import DashboardCard from '../../Cards/DashboardCard'
import Card1 from '../../../Gallery/Dashboard/card1.svg'
import TitleCard from '../../../Gallery/Dashboard/titlecard.svg'
import SkillCardimg from '../../../Gallery/Dashboard/skillcard.svg'
import ExpCard from '../../../Gallery/Dashboard/experiencecard.svg'

const skills = [
  {title: 'UI Design', body: 'Designing Uis and the Like', Icon:(<BiAlarm />)}
]


const DashboardApp = () => {
  return (
    <div>
      <div className="titlecta"><TitleBar icon={<FaHandSpock />} greeting="Hello, " recipientname="Jemma" subtitle="This could be the start of something great..." /><DashboardCard title="The UI Guy" body="Coming soon!" image={TitleCard} route="/projects/the-ui-guy" /></div>
      
      <div className='Insert DashboardApp'>
      <Row gutter={16}>
          <Col span={8} className="column1">
            <MatchCard />
            <DashboardCard title="Projects" body="A closer look at the work I do" route="/projects" image={Card1} />
            <DashboardCard title="Experience" body="The journey so far!" route="/experience" image={ExpCard} />
            <DashboardCard title="Skills" body="How I do What I do!" route="/skills" image={SkillCardimg} />
          </Col>
          <Col span={16} className="column2">
            <Title level={2}>I heard you were looking for a <span>Product designer</span> </Title>
              <Row className="aboutCompany">
                <Col span={24}>
                </Col>
              
                <Col span={12}>
                  
                  
                  <ol type="1" start="1">
                    <li><div className="number">1</div><p className="text">Own end to end product design process</p></li>
                    <li><div className="number">2</div><p className="text">Take broad, conceptual ideas and turn them into useful and valuable solution for our customers.</p></li>
                    <li><div className="number">3</div><p className="text">Design flows and experiences.</p></li>
                    <li><div className="number">4</div><p className="text">Partner with PMs, engineers, researchers and marketers to oversee user experience of the product from conception until launch.</p></li>
                    <li><div className="number">5</div><p className="text">Monitor the user experience on ongoing basis using data (quant and qual) and propose improvements.</p></li>
                  </ol>
                </Col>
                <Col span={12}>
                <ol start="6">
                    <li><div className="number">6</div><p className="text">Findings into actionable outputs that meet users needs.</p></li>
                    <li><div className="number">7</div><p className="text">Test assumptions with experiments and validate concepts through user research.</p></li>
                    <li><div className="number">8</div><p className="text">Maintain detailed user flows, product maps, and mock-ups for clear communication of the intent of a design decision.</p></li>
                    <li><div className="number">9</div><p className="text">Build complex prototypes for user testing.</p></li>
                  </ol>
                </Col>
              </Row>
           
              <Row className="mySkillSet">
                <Col span={24}>
                <Title level={2}>What I can bring to the <span>XXX</span> family </Title>
                <div className='skillsList'>
                  <Row className='skillListItem'>
                    <h4>End to end experience with projects of all sizes</h4>
                    <p>I have lead the design on small, admin style product features to large from the group up Product designs and everything in between.</p>
                  </Row>
                  <Row className='skillListItem'>
                    <h4>Flexibility, adaptability and mobility</h4>
                    <p>My current position is Head of Product Design for a scaleup Tech Company so I am no stranger to sliding goal posts. Whether its a fully mapped out Technical document or a verbal agreement, I can turn your ideas into wonderful design solutions.</p>
                  </Row>
                  <Row className='skillListItem'>
                    <h4>DevoLingo</h4>
                    <p>I understand the art of communication, especially when it comes to development environments. Stakeholders, Product Managers, Data Scientists, Testers, Designers - They all have their own language and I am fluent in them all. Products.</p>
                  </Row>
                  <Row className='skillListItem'>
                    <h4>Analytical Mindset</h4>
                    <p>I analyse and test features to see whether they meet the users requirements and suggest realistic solutions if not.</p>
                  </Row>
                  <Row className='skillListItem'>
                    <h4>Component Design from the ground up</h4>
                    <p>I am experienced with creating and maintaining granular design systems using the Atomic Design methodology to create reusable components. This enables me to build rapid design flows and mockups ups to a high standard.</p>
                  </Row>
                  <Row className='skillListItem'>
                    <h4>People Focused</h4>
                    <p>I am emotionally intelligent and push people towards growth through motivation, inspiration and collaboration. I take time to get to know people and adapt myself to their unique communication styles to build a good relationship. Working as part of a supportive and collaborative team is my ideal environment.</p>
                  </Row>
                  <Row className='skillListItem'>
                    <h4>From Ender</h4>
                    <p>I am emotionally intelligent and push people towards growth through motivation, inspiration and collaboration. I take time to get to know people and adapt myself to their unique communication styles to build a good relationship. Working as part of a supportive and collaborative team is my ideal environment.</p>
                  </Row>

                </div>
                </Col>
              </Row>
              
          </Col>
        </Row>

        
  
      </div>
    </div>
  )
}

export default DashboardApp
