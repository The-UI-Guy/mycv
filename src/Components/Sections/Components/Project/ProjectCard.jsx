import { Carousel, Col, Row } from 'antd'
import React from 'react'
import { FaFigma } from 'react-icons/fa'
import DoubleSectionLeft from '../ContentSections/DoubleSectionLeft'
import DoubleSectionRight from '../ContentSections/DoubleSectionRight'
import SingleSection from '../ContentSections/SingleSection'
import Header from '../Header/Header'
import './ProjectCard.css'
import Cover from '../../../../Gallery/Calendar/Cover.svg'
import Responsive from '../../../../Gallery/Calendar/responsive.svg'
import DesignSystem from '../../../../Gallery/Calendar/designsystem.svg'
import Popular from '../../../../Gallery/Calendar/popular.svg'
import Test from '../../../../Gallery/Calendar/themes.svg'
import Theme from '../../../../Gallery/Calendar/themes.svg'
import ImageFull from '../ContentSections/ImageFull'
import ImageContained from '../ContentSections/ImageContained'



  const ProjectCard = () => {
  
  return (
    <div className='ProjectCard'>
        <Header 
        className="HeaderCalendar" 
        Slide1Text="Responsive Emoji Calendar"
        Slide1Type="Community Project"
        BtnColor="#000000"
        BtnTextColor="#ffffff"
        BtnText="Get a copy"
        BtnIcon={<FaFigma />}image={Cover}
        backgroundGraphic={Cover}
        />
          <SingleSection 
        id="1"  
        title="Giving Back to the Community" 
        body="Figma Community has created a space where designers can share their work, ideas, and useful tools to streamline the design process for other creatives. As someone who has used Figma Community to jumpstart ideas, I felt like I wanted to give back. I noticed that there was no responsive desktop-to-mobile 
        calendar available, or if there was, it was a simplified sidebar version without events.
        
        This is when the responsive calendar was born! It is a fully responsive set of layouts designed to help other designers showcase their calendar designs.
        "
        button="Download From Community"
        
        />
        <ImageFull 
        imagefull={Responsive}
        span="24"
        />
             <SingleSection
        id="2"      
        title="Open Source Design System" 
        body="As part of the Project I released the entire design system, allow users to customise their calendar
        quickly and accurately, giving them full control over their calendars look and feel. It was important to me to hand off all atomic elements to designers so they 
        can harness the full power of the design system. Everything from typography to Full layouts
        has been provided and editable!"
       
        
        />
         <ImageContained
           imagecontained={DesignSystem}
           span="24"
         />
        <DoubleSectionLeft
        id="3" 
        title="Popularity"
        body="Responsive Emoji Calendar has fast become a favourite download under ‘Responsive Calendars’ within the community with over 1.6K downloads within a 3 month period."
        image={Popular}
        />
   
        <ImageContained
        id="4" 
        title="Sexy Themes"
        tag="Coming Soon!"
        color="red"
        body="An update Including Themes is in the works, making it easier than ever for designers to apply
        global colour and style changes"
        image={Test}
        span="24"
        />

      
        
      
        
    </div>
  )
}

export default ProjectCard
