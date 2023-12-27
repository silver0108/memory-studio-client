import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "./Join.css"

function Join() {
  const [ name, setName ] = useState([]);
  const [ userId, setUserId ] = useState([]);
  const [ password1, setPassword1 ] = useState([]);
  const [ password2, setPassword2 ] = useState([]);
  const [ email, setEmail ] = useState([]);
  const navigate=useNavigate();


    const isButtonDisabled = !name || !userId || !password1 || !password2 || !email;

    const handleInputChange = (e) => {
      const { name, value } = e.target;

      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'userId':
          setUserId(value);
          break;
        case 'password1':
          setPassword1(value);
          break;
        case 'password2':
          setPassword2(value);
          break;
        case 'email':
          setEmail(value);
          break;
        default:
          break;
      }
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await axios.post('http://3.36.63.145:8080/api/signup', {
           "name": name,
           "userId": userId,
           "email": email,
           "password1": password1,
           "password2": password2,
        });

        alert('회원가입 성공!');
        navigate('/login');

        console.log('Sending data:', { name, userId, email, password1, password2 });
        console.log('Server response:', response.data);
    }catch(error){
        console.log(error);
    }
};

  return (
    <div className='join_page'>
        <h2>회원가입</h2>
        <p>회원가입을 통해 다양한 서비스를 만나보세요!</p>
        <form onSubmit={handleSubmit}>
        <div>
          <label>
            <div className="name">이름</div>
            <input className="box" type="text" name="name" value={name} onChange={handleInputChange} placeholder="이름" />
          </label>
          <label>
            <div className="id">아이디</div>
            <input className="box" type="text" name="userId" value={userId} onChange={handleInputChange} placeholder="아이디 입력" />
          </label>
          <label>
            <div className="password1">비밀번호</div>
            <input className="box" type="password" name="password1" value={password1} onChange={handleInputChange} placeholder="비밀번호" />
          </label>
          <label>
            <div className="password2">비밀번호 확인</div>
            <input className="box" type="password" name="password2" value={password2} onChange={handleInputChange} placeholder="비밀번호 재입력" />
          </label>
          <label>
            <div className="email">이메일</div>
            <input className="box" type="email" name="email" value={email} onChange={handleInputChange} placeholder="이메일 입력" />
          </label>
        </div>
        <input className={`submit_join_${(isButtonDisabled)? "off" : "on"}`} type="submit" value={"가입하기"} disabled={isButtonDisabled}/>
      </form>
    </div>
  )
}

export default Join