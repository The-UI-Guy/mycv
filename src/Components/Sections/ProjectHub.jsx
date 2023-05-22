import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Link, Outlet } from 'react-router-dom';

const ProjectHub = () => {
  return (
    <div>
        <div>
        test the routes

    <Link to="calendar"><div>click me</div></Link>
    <Outlet />
      </div>
      
    </div>
  )
}

export default ProjectHub
