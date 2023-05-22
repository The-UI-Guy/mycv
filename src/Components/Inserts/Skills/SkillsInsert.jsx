import React from 'react'
import TitleBar from '../../TitleBar/TitleBar'
import { FaAtom, FaFigma, FaHandSpock, FaHtml5 } from 'react-icons/fa'
import Insert from '../Insert'
import { Anchor, Col, Divider, Row } from 'antd'
import { Intro, MatchCard } from '../../Sections/Components'
import Title from 'antd/es/typography/Title'
import SkillsCard from '../../Cards/SkillsCard'
import { BiAlarm, BiAtom, BiBookHeart, BiBookReader, BiBulb, BiFile, BiGitBranch, BiGrid, BiGridAlt, BiHappyHeartEyes, BiPhone, BiPointer, BiSquare, BiStar, BiUserCircle, BiUserVoice, BiVial, BiWater } from 'react-icons/bi'
import { SiAdobecreativecloud } from 'react-icons/si';
import './SkillsInsert.css'
import TechCard from '../../Cards/TechCard'

const skills = [
  {title: 'Design Thinking', 
   body: 'Employing a user-centric mindset to approach problem-solving and decision-making, taking into account the needs and preferences of the target audience.', 
   Icon:(<BiBulb />)},
  {title: 'Steakholder Management', 
   body: 'Demonstrating effective stakeholder management skills, building strong relationships, and balancing competing priorities and expectations.', 
   Icon:(<BiUserVoice />)},
  {title: 'Communicative', 
   body: 'Strong verbal and written communication skills to effectively convey design concepts, ideas, and requirements to stakeholders, team members, and clients.', 
   Icon:(<BiPhone/>)},
  {title: 'Project Management', 
   body: 'Proficiently managing multiple design projects simultaneously, setting priorities, allocating resources, and ensuring prompt delivery of high-quality solutions.', 
   Icon:(<BiFile />)},
  {title: 'User Interface Design', 
   body: 'Proficient in creating intuitive and visually appealing user interfaces, understanding principles of layout, color, and typography.', 
   Icon:(<BiSquare />)},
  {title: 'Prototyping', 
   body: 'Proficiently creating interactive prototypes using tools such as Figma, Sketch, or Adobe XD to demonstrate user flows, interactions, and design concepts.', 
   Icon:(<BiPointer />)},
  {title: 'Wireframing', 
   body: 'Creating detailed wireframes and low-fidelity mockups to define the information architecture, layout, and structure of digital products.', 
   Icon:(<BiGridAlt />)},
  {title: 'User Research', 
   body: 'Conducting user research, gathering insights, and translating them into actionable design recommendations and improvements.', 
   Icon:(<BiUserCircle />)},
  {title: 'Usability Testing', 
   body: ' Proficiently planning and conducting usability tests to evaluate design solutions, gather feedback, and iterate on designs to improve user experience.', 
   Icon:(<BiVial />)}
]

const techSkills = [
  {title: 'Design Software', 
   body: ' Proficient in design software like  Figma  andAdobe XD for creating high-fidelity designs and collaborating with team members.', 
   Icon:(<FaFigma />)},
  {title: 'Front-End Development', 
   body: 'Possessing a basic understanding of HTML, CSS, and JavaScript to collaborate effectively with developers and implement design solutions.', 
   Icon:(<FaHtml5 />)},
  {title: 'Design Systems', 
   body: 'Experience in creating and maintaining design systems to ensure consistency, efficiency, and scalability across multiple projects and teams.', 
   Icon:(<BiGitBranch/>)},
  {title: ' React Component Libraries', 
   body: ' Experience in utilizing and customizing popular React component libraries, such as Material-UI, Ant Design, or Bootstrap, to enhance development efficiency and maintain consistent UI patterns.', 
   Icon:(<BiAtom />)},
  {title: 'React Basics', 
   body: 'Familiarity with React, including the ability to create components, manage state, and handle basic interactions in React applications.', 
   Icon:(<BiAtom />)},
  {title: 'Adobe Creative Suite', 
   body: 'Proficient in using Adobe Photoshop, Illustrator, and InDesign for graphic design, image editing, and creating visual assets.', 
   Icon:(<SiAdobecreativecloud />)},
  {title: 'Rapid Prototyping', 
   body: 'Familiarity with tools like InVision, Marvel, or Principle for quickly creating and iterating on interactive prototypes.', 
   Icon:(<BiGridAlt />)},
]

const personalSkills = [
  {title: 'Creativity', 
   body: 'Demonstrating the ability to think outside the box and come up with innovative design solutions that push boundaries and differentiate products in the market.', 
   Icon:(<BiBulb />)},
  {title: 'Adaptability', 
   body: 'Exhibiting flexibility to work in a fast-paced, dynamic environment, adapting to changing priorities and project requirements.', 
   Icon:(<BiWater />)},
  {title: 'Problem Solver', 
   body: 'Strong analytical and problem-solving skills to identify design challenges and develop effective solutions that balance user needs and business goals.', 
   Icon:(<BiVial/>)},
  {title: 'Keen eye for detail', 
   body: 'Maintaining meticulous attention to detail in all aspects of design, ensuring pixel-perfect accuracy and consistency across different devices and platforms.', 
   Icon:(<BiHappyHeartEyes />)},
  {title: 'Leadership', 
   body: 'Ability to inspire and motivate team members, providing clear direction and guidance while fostering a positive and inclusive team culture.', 
   Icon:(<BiUserVoice />)},
  {title: 'People focused', 
   body: 'Proficient in using Adobe Photoshop, Illustrator, and InDesign for graphic design, image editing, and creating visual assets.', 
   Icon:(<BiStar />)},
  {title: 'Perpetual Student', 
   body: 'Eagerness to stay updated with the latest design trends, tools, and techniques, and willingness to continuously improve and expand skillset.', 
   Icon:(<BiBookHeart />)},
]


const SkillsInsert = () => {
  return (
    <div>
       <TitleBar icon={<BiAtom />}  title="My Skill Set" />
      <Row gutter={16}>
        
        <Col span={20}>
          <div className='Insert SkillsInsert'>
          <Row gutter={16}>
          <Col span={24} className="container">
            <h2 className='RowTitle'>Professional Skills</h2>
              <Row className="ProfessionalSkills" id="professional">
                {skills.map((skill) => {
                  return (
                    <SkillsCard title={skill.title} body={skill.body} Icon={skill.Icon} />
                  )
                })}
              </Row>
              <h2 className='RowTitle' >Technical Skills</h2>
              <Row className="TechSkills" id="technical">
                {techSkills.map((techSkill) => {
                  return (
                    <TechCard title={techSkill.title} body={techSkill.body} Icon={techSkill.Icon} />
                  )
                })}
              </Row>
              <h2 className='RowTitle' id="personal">Personal Skills</h2>
              <Row className="TechSkills">
                {personalSkills.map((personalSkill) => {
                  return (
                    <TechCard title={personalSkill.title} body={personalSkill.body} Icon={personalSkill.Icon} />
                  )
                })}
              </Row>
              
          </Col>
        </Row>

          </div>
        </Col>
        <Col span={4} className="secondarynav">
      <Anchor
      affix={false}
  
      items={[
          {
            key: 'professional',
            href: '#professional',
            title: 'Professional Skills',
          },
          {
            key: 'technicalskills',
            href: '#technical',
            title: 'Technical Skill',
          },
          {
            key: 'personalsmills',
            href: '#personal',
            title: 'Personal Skills',
          },
      
        ]}
      />

      </Col>
      </Row>
      
     

    </div>
  )
}

export default SkillsInsert
