import { useLocation } from 'react-router-dom';
import './CalendarDetail.css';
import { useEffect } from 'react';
import axios from 'axios';

export default function CalendarDetail() {
  const location = useLocation();
  const pathname = location.pathname;
  const {year, month, day} = location.state;
  console.log(year)

  useEffect(() => {
    try{
      const response = axios.get(`/api/photodetail?
        month=${`${year}-${month}`}}&date=${`${day}`}&groupid=${1}`);
      const data = response.data;
    }catch(error){
      console.log(error)
    }
  }, [])

  return (
    <div className='calendarDetailWrapper'>
      <div>

      </div>
      <div className='imgContainer'>
        {/* <img src={imgUrl} alt={pathname}/> */}
      </div>
    </div>
  );
}