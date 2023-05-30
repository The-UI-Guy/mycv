import { Anchor, Button, Carousel, Col, Row, Tag } from 'antd'
import React from 'react'
import './UiProject.css'
import Header from '../../../Gallery/uiguy/UIHeader.jsx'
import Img1 from '../../../Gallery/uiguy/UIOne.jsx'
import Img2 from '../../../Gallery/uiguy/2.svg'
import Img3 from '../../../Gallery/uiguy/3.svg'
import Img4 from '../../../Gallery/uiguy/4.svg'
import Img5 from '../../../Gallery/uiguy/5.svg'
import Logo from '../../../Gallery/uiguy/Logo.svg'
import { DoubleSectionLeft, DoubleSectionRight } from '../../Sections/Components'
import ImageFull from '../../Sections/Components/ContentSections/ImageFull'
import ImageContained from '../../Sections/Components/ContentSections/ImageContained'
import SingleSection from '../../Sections/Components/ContentSections/SingleSection'
import { FaFigma } from 'react-icons/fa'
import { BiVial } from 'react-icons/bi'
import TitleBar from '../../TitleBar/TitleBar'
import UIOne from '../../../Gallery/uiguy/UIOne.jsx'
import UIHeader from '../../../Gallery/uiguy/UIHeader.jsx'



  const UiProject = () => {
  
  return (

    <div className="PageGrid">
    
    <Row gutter={16}>
     <Col span={24}>
      
     <TitleBar 
     title={'The UI Guy Design system'} 
     subtitle={'Figma and React component library'} 
     tag="React Framework"
     tag2="Figma"
     tagcolor="purple"
     tag2color="green"
     buttontext="Download on Figma"
     buttonicon={<FaFigma />}
     buttontype="btnblack"
     />
     </Col>
   </Row>
   <Row gutter={16}>
     <Col span={20}>
     <div className='ProjectCard'>
      
            <div className="Header">
            <Row >
            <Col span={10} className="content">
            <img src={Logo} width={58} height={58} />
            <br></br>
              <h2>The complete component 
                  library for Figma and React </h2>
                <p>The UI guy offers a huge library of components. 
                  very component you need is ready for production. 
                  Bring those ideas to life!</p>
                <Tag>Coming Autumn 2023</Tag>
              
              </Col>
              <Col span={14} className="image">
              <UIHeader />
              </Col>
            </Row>
          </div>

          <SingleSection 
        id="1"  
        title="An Open Source Product built for designers
        and developers" 
        body="As a designer, I have had extensive experience working with a variety of design systems. I wanted to create a human-focused design system that could seamlessly transition to React. Throughout the development process, I have remained dedicated to prioritising the quality, accessibility, and ease of use for end-users. To achieve this, I have designed easy-to-use components with smart variables, as well as React props that are equally intuitive. 

        My ultimate goal is to empower users to easily and quickly pick up The UI Guy and confidently build their own applications.
        "
        />
          <ImageFull 
        imagefull={<UIOne />}
        span="24"
        />
         <SingleSection 
        id="2"  
        title="Full Customisable UI component Library 
        with easy to use Props and Features" 
        body="As a self-taught designer, I know firsthand how daunting it can be to tackle a UI Library. Some design systems can be overly simplistic, while others are weighed down by unnecessary features. 

        With The UI Guy design system, I've stripped things down to their simplest form, while introducing innovative features that empower designers to create more accessible and engaging interfaces. Whether you're just starting out or looking to refine your skills, The UI Guy is here to help make your journey smoother and more enjoyable.
        "
        />
         <DoubleSectionLeft
        id="3" 
        title="Save time on design iterations by utilizing the pre-designed Figma variants that are ready for rapid deployment."
        body="I've aligned Figma Components with React Props to enable seamless design-to-development flows. Comprehensive documentation is also available to answer any questions, ensuring a smooth and hassle-free experience."
        image={Img2}
        />
      
        
          <ImageContained
        id="4"  
        title="💎 Crystal and 🌑 Obsidian themes, ready to use right out of the box." 
        image={Img3}
        span="24"
        />


      <DoubleSectionLeft
        id="5" 
        title="Tokenised Colour Libraries make it fast and efficient to create new themes with just a few clicks"
        body="I've aligned Figma Components with React Props to enable seamless design-to-development flows. Comprehensive documentation is also available to answer any questions, ensuring a smooth and hassle-free experience."
        image={Img5}
        />

     
        
          <ImageContained
           id="6"  
           title="Move over Skeuomorphic and Material, there is a new kid on the block...Tactile Design" 
           body="Are you ready to take your design game to the next level? Say hello to Tactile - the design trend that's all about creating a truly immersive experience. Unlike the loud and dramatic Skeuomorphic and Material designs, Tactile is all about subtlety and sophistication.
   
           What sets Tactile apart is its ability to convey a sense of touchable depth by mimicking real-life physics. It's a design trend that's taking the industry by storm and it's not hard to see why. With Tactile, you can create a user experience that's not just visually stunning, but truly immersive."
        image={Img4}
        span="24"
        />
            
        </div>
    
      
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
            title: 'Component Library',
          },
          {
            key: '3',
            href: '#3',
            title: 'Props',
          },
          {
            key: '4',
            href: '#4',
            title: 'Themes',
          },
          {
            key: '5',
            href: '#5',
            title: 'Tokens',
          },
          {
            key: '6',
            href: '#6',
            title: 'Tactile Design',
          },
      
        ]}
      />
     </Col>
   </Row>
 
 </div>



  )
}

export default UiProject
