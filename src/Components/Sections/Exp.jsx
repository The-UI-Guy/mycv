import React from 'react'
import { ExperienceCard } from './Components'
import { useState } from 'react'
import TitleBar from '../TitleBar/TitleBar';
import { FaAddressBook } from 'react-icons/fa';
import { Col, Row } from 'antd';

const mermaid = [
  {title: "variable title cocks",
    job: "fanny licker",
    position: "missionary", }
];

const Exp = () => {
  return (
    <div>
     
      <Row gutter={16}>
        <Col span={24}>
        <TitleBar title={'My Experience'} icon={<FaAddressBook />} />
        </Col>
      </Row>
      <Row>
        <Col>
        <ExperienceCard 
        title="Head of Product Design" 
        company="Connex One" 
        type="Tech"
        tagcolor="#4BB543"
        date="March 2021 to present" 
        description="I lead a design team to maintain and implement a component based design system across our platform, creating consistency across our 7 AI driven products. I collaborate with stakeholders and product owners to create user friendly solutions for complex AI features and share that vision with the designers and developers. It’s my responsibility to ensure that all designs meet our commercial and business limitations, using a seamless User Experience and meet a high visual standard. I ensure all designs are deployed into development with comprehensive user journeys and offer support to ensure the finished product accurately reflects the agreed designs. "
        present="present"
        listitem1="Conceptualise complex AI features for 7 integrated SaaS products."
        listitem2="Influence product priorities with Design and User research."
        listitem3="Collaborate with stakeholders, product owners, designers, data scientists and testers to deliver user-friendly, high-quality features and products."
        listitem4="Maintain and implement a high-quality design system to enable fast design iterations and consistency across the platform."
        listitem5="Assign work and manage the workload of a team of UI Designers."
        listitem6="Collaborate with Marketing to make sure our public facing designs showcase the product correctly and favourably."
        listitem7="Oversee feature development by working closely with development."
        />
        <ExperienceCard 
        title="Product Designer" 
        company="SpotOn Maintence Services" 
        date="Feb 2020 - March 2021" 
        type="startup"
        tagcolor="#4F02B9"
        listitem1="Design an ecommerce booking platform that connected Estate agents with contractors. Oversee and support the product development with a local and overseas development team"
        listitem2="Creative interactive prototypes and user journeys to help educate investors"
        listitem3="Pitch product features and User journeys to investors and stakeholders"
        listitem4="Create a design system to ensure consistency and fast iteration across the SpotOn platform"
        listitem5="Produce pixel perfect, development ready UI’s and assets"
        listitem6="Work with stakeholders to create the business branding and marketing assets"
        
        />

<ExperienceCard 
        title="Contract UI Designer and Developer" 
        company="Rhino Design and Events " 
        date="Feb 2019 - March 2020" 
        type="Automotive events"
        tagcolor="#FD0705"
        listitem1="Work with global stakeholders to create User Interfaces Design for an enterprise level booking app with a large global user base."
        listitem2="Conduct UX research by observing a third-party focus group use a high quality prototype. "
        listitem3="Measure the value of UX feedback and incorporate user feedback into the design process."
        listitem4="Create interactive prototypes for new feature requests and test with internal and external booking app users."
        listitem5="Collaborate with inhouse and external developers to ensure all interaction and User Interface standards were met."
        listitem6="Prepare all UI designs for developer hand-off using Adobe XD prototyping tools."
        
        />
        <ExperienceCard 
        title="Lead Web Designer" 
        company="Firstfound Digital" 
        date="July 2015 - Dec 2018" 
        type="Design Agency"
        tagcolor="#FD46AA"
        listitem1="Design responsive, sales focused websites."
        listitem2="Design big-commerce UIs for platforms like Magento and Woo."
        listitem3="Present design prototypes, airframes and mock-ups to customers using Invision and Adobe XD."
        listitem4="Manage all accounts during the design phase, keeping customers up to date with progress, negotiating design features and scheduling milestones."
        listitem5="Up-sell additional website features to customers."
       
        
        />
        </Col>
      </Row>

    
     
    </div>
  )
}

export default Exp
