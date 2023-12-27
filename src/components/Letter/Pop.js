import React from 'react'
import { Link } from "react-router-dom";
import "./Pop.css"

const Pop = (props) => {
    const handleClose = () => {
        props.onClose();
      };

  return (
    <div className='letter_pop'>
        <div className='letter_pop_date'><span>{props.createDate}</span></div>
        <div className='letter_pop_name'><span>{props.friendName}</span> 님의 편지</div>
        <div className='letter_pop_content'><span>{props.content}</span></div>
        <Link to="/letter"><button className='letter_pop_close' onClick={handleClose}>닫기</button></Link>
        <div className='shadow'></div>
    </div>
  )
}

export default Pop