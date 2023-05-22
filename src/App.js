import React from 'react';
import { Col, Menu, Row, Switch } from 'antd';
import { Sidebar, Body, Dashboard, ExperienceSection, AlertBanner } from './Components';

import './Client-overlay.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react'
import { FaOctopusDeploy, FaPoll } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';





const App = () => {

  return (
    <div className="AppMain">
     
   <Sidebar />
    <Body />
  
  </div>

  )

 
    };


export default App;