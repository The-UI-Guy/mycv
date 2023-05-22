import React from 'react'
import './DashboardCard.css'

const DashboardCard = ({ title, body, image, route }) => {
  return (
    <a className='DashboardCard' href={route}>
      <div className="content">
      {title && (<h2>{title}</h2>)}
      {body && (<p>{body}</p>)}
      </div>
      <div className="image">
      {image && (<img src={image} />)}
      </div>
    </a>
  )
}

export default DashboardCard
