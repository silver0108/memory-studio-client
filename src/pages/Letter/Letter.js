import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SwitchToggle from '../../components/Letter/SwitchToggle'
import Head from '../../components/Letter/Head'
import Card from '../../components/Letter/Card'

import "./Letter.css"
import { Write } from '../../assets'
import Pop from '../../components/Letter/Pop';

function Letter() {
  const [letterList, setLetterList] = useState([]);

  useEffect(() => {
    loadItems();
  },[])

  const loadItems =  async() => {
  try {
    const response = await axios.get(`http://3.36.63.145:8080/api/letters?userId=${2}`);
    setLetterList(response.data);
    console.log('Response data:', response);
}catch(error){
    console.log(error);
}
  };

  return (
    <div className='letter_page'>
        <Head/>
        <SwitchToggle/>
        <div className='card_ex'>
          {letterList.map(item => (
            <div className='card_card'>
              <Card
                userId={item.userId}
                userName={item.userName}
                friendName={item.friendName}
                content={item.content}
                createDate={item.createDate}
                openDate={item.openDate}
              />
            </div>
          ))}
          </div>
        <div className='write_icon'>
          <Link to="/letter/write"><Write/></Link>
        </div>
    </div>
  )
}

export default Letter

