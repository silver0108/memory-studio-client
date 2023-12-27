import { useEffect, useState } from 'react';
import { Home, List } from '../../assets';
import UserInfo from '../UserInfo/UserInfo';
import './Header.css'
import RoundButton from './RoundButton';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import SquareButton from './SquareButton';

export default function Header() {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [groupList, setGroupList] = useState([]);

  const closeButtonClick = () => {
    setOpenSideBar(false);
  }

  useEffect(()=> {
    const fetchData = async () => {
      const response = await axios.get(`http://3.36.63.145:8080/api/groups?memberId=${1}`)
      console.log(response.data)
      setGroupList(response.data)
    }

    fetchData();
  }, [openSideBar])

  return (
    <div className="headerWrapper">
      {pathName === '/calendar' || pathName === "/letter" ? (
        <List onClick={() => setOpenSideBar(true)}
        />
      ) : (
        <div style={{width: "85vw", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <List onClick={() => setOpenSideBar(true)} />
          <Home onClick={() => navigate('/')}/>
        </div>

      )}
      {openSideBar ? (
        <div className='sideBar'>
          <button className='closeButton' onClick={closeButtonClick}>X</button>
          <UserInfo />
          <div className='groupList'>
            {groupList.map((group) => (
              <SquareButton
                key={group.groupId}
                message={group.groupName}
                onClick={() => navigate('/')}
                color="#000000"
                backgroundColor="#F3F3F3"
              />
            ))}
          </div>
          <RoundButton
            message="로그아웃"
            onClick={() => alert("로그아웃")}
            color="#FFFFFF"
            backgroundColor="#535353"
          />
        </div>
      ): null}
    </div>
  );
}