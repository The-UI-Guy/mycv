import React from 'react';
import Dashboard from '../Sections/Dashboard';
import Exp from '../Sections/Exp';
import './Body.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from '../Sections/Skills';
import About from '../Sections/About';
import Contact from '../Sections/Contact';
import ProjectCalendar from '../Sections/ProjectCalendar';
import ProjectHub from '../Sections/ProjectHub';
import { Calendar, Row } from 'antd';
import Projects from '../Sections/Projects';
import DashboardApp from '../Inserts/Dashboard/DashboardApp';
import SkillsInsert from '../Inserts/Skills/SkillsInsert';
import ExperienceInsert from '../Inserts/Experience/ExperienceInsert';
import AboutInsert from '../Inserts/AboutMe/AboutInsert';
import ContactInsert from '../Inserts/ContactInsert/ContactInsert';
import UiProject from '../Inserts/Projects/UiProject';

const Body = () => {
  return <Row className='Body'>
  <Routes>
    <Route path="/" element={<DashboardApp/>} />
    <Route path="/experience" element={<ExperienceInsert/>} />
    <Route path="/experience/#connex" element={<ExperienceInsert/>} />
    <Route path="/experience/#spoton" element={<ExperienceInsert/>} />
    <Route path="/skills" element={<SkillsInsert/>} />
    <Route path="/projects" element={<ProjectHub/>} />
    <Route path="/projects/the-ui-guy" element={<UiProject />} />
    <Route path="/projects/calendar" element={<Projects />} />
    <Route path="/projects/nlp-chat-bot" element={<Projects />} />
    <Route path="/projects/spoton-services" element={<Projects />} />
    <Route path="/About" element={<AboutInsert/>} />
    <Route path="/Contact" element={<ContactInsert/>} />
  </Routes>
</Row>
}

export default Body
