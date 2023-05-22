import React from 'react'
import LogoHeader from './LogoHeader'
import './Sidebar.css';
import { BiAtom, BiBriefcaseAlt, BiHomeAlt, BiMailSend, BiUserCircle, BiVial } from "react-icons/bi";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Collapse } from 'antd';
const { Panel } = Collapse;




const Sidebar = () => {

  return (
    <div className="Sidebar">
      <LogoHeader />

      <div className="menuContainer">
      <NavLink className="Link" to="/"><BiHomeAlt />Intro</NavLink>
      <NavLink className="Link" to="/experience"><BiBriefcaseAlt />Experience</NavLink>
      <NavLink className="Link" to="/skills"><BiAtom />Skills</NavLink>
      <Collapse className="project" size="small" arrowIcon={'<BiBriefcaseAlt />'} expandIcon={({ isActive }) => <BiVial />}>
      <Panel header="Projects" key="1">
      <NavLink className="Link" to="projects/the-ui-guy"><BiVial />The UI Guy</NavLink>
      <NavLink className="Link" to="projects/calendar"><BiVial />calendar</NavLink>
      </Panel>
    </Collapse>
      <NavLink className="Link" to="/about"><BiUserCircle/>About</NavLink>
      <NavLink className="Link" to="/contact"><BiMailSend />Contact</NavLink>
      </div>

    </div>
 
    )
}

export default Sidebar
