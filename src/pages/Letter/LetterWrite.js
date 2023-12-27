import React , { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Head from '../../components/Letter/Head';
import "./LetterWrite.css"
import { Friend, Friends } from '../../assets'

function LetterWrite() {
  const navigate = useNavigate();
    const [userId, setUserId] = useState([]);
    const [friendName, setFriendName] = useState([]);
    const [content, setContent] = useState([]);
    const [date, setDate] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        switch (name) {
          case 'myId':
            setUserId(value);
            break;
          case 'friendName':
            setFriendName(value);
            break;
          case 'date':
            setDate(value);
            break;
          case 'content':
            setContent(value);
            break;
          default:
            break;
        }
    };
  
    const isButtonDisabled = !userId || !friendName || !content || !date;
    
    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await axios.post('http://3.36.63.145:8080/api/letter', {
           "myId": userId,
           "friendId": friendName,
           "content": content,
           "date": date,
        });
        console.log('Sending data:', { userId, friendName, content, date });
        console.log('Server response:', response.data);
    }catch(error){
        console.log(error);
    }
};

  return (
    <>
    <button className='backButton' style={{color: "black"}}onClick={() => navigate(-1)}>{'<'}</button>
    <div className='letter_page'>
      
        <Head/>
        <div>
            <h2 className='letter_header'>편지 작성</h2>
            <form onSubmit={handleSubmit}
            style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                <div className='letter_to'> 
                    <Friend/>
                    <input type="text" id="letter_friend" placeholder='받는 사람' name="friendName" value={friendName} onChange={handleInputChange}/>
                </div>
                <div>
                    <input type="text" id="letter_name" placeholder='보내는 사람 ID' name="myId" value={userId} onChange={handleInputChange}/>
                </div>
                <input type="date" id="letter_date" name="date" value={date} min="2023-12-27"  onChange={handleInputChange}></input>
                <textarea id="letter_text" placeholder='여기에 메세지를 작성해주세요.' name="content" value={content} onChange={handleInputChange}/>
                <Link to="/letter"><button type='submit' id="letter_submit" disabled={isButtonDisabled}>전달하기</button></Link>
            </form>
        </div>

        
    </div>
    </>
  )
}

export default LetterWrite