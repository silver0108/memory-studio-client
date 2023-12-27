import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./Card.css"
import Pop from './Pop';

const Card = (props) => {
    const [isModal, setIsModal] = useState(false);

    const handleButtonClick = () => {
        setIsModal(true);
      };

      const handleClose = () => {
        setIsModal(false);
      };

  return (
    <div className='letter_card'>
        <div className='letter_card_check'><span>{props.check}</span>2일 뒤 확인 가능</div>
        {/* <div className='letter_card_check'>확인 가능</div> */}
        <div className='letter_card_name'><span>{props.friendName}</span> 님의 편지</div>
        <div className='letter_card_date'><span>{props.createDate}</span> 작성됨</div>
        <button className='letter_card_button' onClick={handleButtonClick}>확인하기</button>
        {isModal && <Pop
        userId={props.userId}
        userName={props.userName}
        friendName={props.friendName}
        content={props.content}
        createDate={props.createDate}
        openDate={props.openDate}
        onClose={handleClose}
      />}
    </div>
  )
}

export default Card