import React from 'react'
import TitleBar from '../../TitleBar/TitleBar'
import { FaHandSpock } from 'react-icons/fa'
import Insert from '../Insert'
import { Anchor, Col, Divider, Row } from 'antd'
import { ExperienceCard, Intro, MatchCard } from '../../Sections/Components'
import Title from 'antd/es/typography/Title'
import { BiAlarm, BiAtom, BiBriefcase, BiBriefcaseAlt, BiBrush, BiBulb, BiFile, BiGhost, BiHomeAlt, BiPen, BiPhone, BiSquare, BiSun, BiUserCircle, BiUserVoice } from 'react-icons/bi'
import DashboardCard from '../../Cards/DashboardCard'
import Card1 from '../../../Gallery/Dashboard/card1.svg'
import TitleCard from '../../../Gallery/Dashboard/titlecard.svg'
import SkillCardimg from '../../../Gallery/Dashboard/skillcard.svg'
import './AboutInsert.css'
import TableOfContents from '../../TableOfContents/TableOfContents'
import { NavLink } from 'react-router-dom'
import SkillsCard from '../../Cards/SkillsCard'
import { SiNintendoswitch } from 'react-icons/si'
import { GiRetroController, GiSquid } from 'react-icons/gi'

const interests = [
  {title: 'Nintendo Fanboy', 
   body: 'Pokemon Master, Zelda Saver and Super Mario Jumper. Nintendo has been a life long pursuit', 
   Icon:(<SiNintendoswitch />)},
  {title: 'Retro Game Freak', 
   body: 'I love collecting old consoles and games, taking away old parts and upgrading them.', 
   Icon:(<GiRetroController />)},
  {title: 'Seafood Addict', 
   body: 'I love to study sealife, I also love eating it!', 
   Icon:(<GiSquid/>)},
  {title: 'Aspiring Writer', 
   body: 'I love telling stories. As well as reading novels I like to dabble in writing them. Watch †his space', 
   Icon:(<BiPen />)},
  {title: 'Art Lover', 
   body: 'Art is my first love. Whether its a well sculpted statue, renaissance painting or digital drawing, Show me your creations!', 
   Icon:(<BiBrush />)},
   {title: 'Travel Enthusiast', 
   body: 'I love to see new places, experience new cultures and most of all..eat new food! City or beach, Im in!', 
   Icon:(<BiSun />)},
   {title: 'Urban Legend Listener', 
   body: 'I love an urban legend, no matter how fantastical or far fetched. Tell me you ghost stories!', 
   Icon:(<BiGhost />)},

]


const AboutInsert = () => {
  return (
    <div>
      <TitleBar title={'About me'} icon={<BiUserCircle />} />
     
      <Row gutter={16}>
      <Col span={24} className='gutter-row'>
        <div className="Insert AboutInsert">
         <Row className='intro'>
          <h5>I always find this part a little awkward...</h5>
          <p>Writing an about me for a CV is very smilar to writing a dating bio. Its important to;</p>
          <ul>
            <li>Make your commitment clear</li>
            <li>Show a little about where you have been</li>
            <li>Talk about what you are looking for</li>
            <li>Showcae your interests</li>
            
          </ul>
          <p>I am looking for a company that offers continual learning, growth and collaboration. Being able to grow with a company and my peers is important to me. I am always looking to evolve myself and adapt to the ever changing landscape! Ideally, Id be looking for long term commitments but will consider short terms too! </p>
          </Row> 
          <h5>Interests</h5>
        <Row className="ProfessionalSkills" id="professional">
          
                {interests.map((interest) => {
                  return (
                    <SkillsCard title={interest.title} body={interest.body} Icon={interest.Icon} />
                  )
                })}
         </Row>
    
      

        </div>
    
      </Col>
      
 

      </Row>

  

    </div>
  )
}

export default AboutInsert
