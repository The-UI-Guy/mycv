import { Button } from 'antd'
import React from 'react'
import { FaHotjar } from 'react-icons/fa';
import { Typography } from 'antd';
import './MatchCard.css';
import ItsAMatchanimated from '../../../Illustrations/ItsAMatchanimated';
import Title from 'antd/es/skeleton/Title';



const MatchCard = () => {
    
  return (
    <div className='MatchCard'>
        <ItsAMatchanimated />
       <p className='text'>Miles Walker Likes You!</p>
     
      <Button type="primary" shape="round" icon={<FaHotjar />} className="Button" >Send a message!</Button>
    </div>
  )
}

export default MatchCard
