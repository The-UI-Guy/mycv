import React from 'react'
import LogoHeader from './LogoHeader'
import './Sidebar.css';
import { Menu } from 'antd';
import { FaOctopusDeploy, FaPoll, FaMobile, FaMale, FaVial, FaUserTie } from 'react-icons/fa';
import { BiAtom, BiBriefcaseAlt, BiHomeAlt, BiMailSend, BiUserCircle, BiVial } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();
  return (

    <div className="Sidebar">
      <LogoHeader />
    <Menu 
  
    onClick={({key})=>{
      navigate(key)
    }}
      items={[
        {label: "Dashboard", icon:<BiHomeAlt />, key:"/"},
        {label: "Experience", icon:<BiBriefcaseAlt />, key:"/exp"},
        {label: "Skill", icon:<BiAtom />, key:"/skills"},
        {label: "Projects", icon:<BiVial />, key:"/projects"},
        {label: "About", icon:<BiUserCircle/>, key:"/about"},
        {label: "Contact", icon:<BiMailSend />, key:"/contact"}
      ]}>
      </Menu>
    </div>
 
    )
}

export default Sidebar
