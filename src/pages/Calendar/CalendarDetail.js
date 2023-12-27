import { useLocation, useNavigate } from 'react-router-dom';
import './CalendarDetail.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CalendarDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { year, month, day } = location.state;
  const monthData = `${year}-${month}`;
  const date = `${day}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios
          .get(`http://3.36.63.145:8080/api/photodetail?month=${monthData}&date=${date}&groupId=${1}`);
        setData(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  return (
    <div className='detailWrapper'>
      <button className='backButton' onClick={() => navigate(-1)}>{'<'}</button>
      {data.map((item)=>(
        <div key={item} className='detailContainer'>
          <div>{item.username}</div>
          <div className='imgContainer'>
            <img src={item.url} alt={item.userName}/>
          </div>
        </div>
      ))}
      
    </div>
  );
}