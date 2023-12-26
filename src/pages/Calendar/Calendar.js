import './Calendar.css';
import CalendarBox from "../../components/Calendar/CalendarBox/CalendarBox";
import { useEffect, useState } from 'react';
import { Left, Right } from '../../assets';
import axios from 'axios';
import generateBoxNum from '../../utils/generateBoxNum';
import { useNavigate } from 'react-router-dom';

export default function Calendar() {
  const currentDate = new Date();
  const[currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth() + 1);
  const [years, setYears] = useState([]);
  const [uploadedImages, setUploadedImages] = useState({});
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const startYear = 2020;
    const endYear = 2030;
    const yearsArray = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);
    setYears(yearsArray);
  }, []);

  useEffect(() => {
    const month = `${currentYear}-${currentMonth}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://3.36.63.145:8080/api/photo?month=${month}&groupId=${1}`);
        console.log(response)
        
        if(response.data) {
          response.data.map(({ date, url }) => (
            setUploadedImages(prevState => ({
              ...prevState,
              [`${currentYear}-${currentMonth}-${date}`]: url
            }))
          ));
        }
        
      } catch(error) {
        console.log("미리보기 사진 불러오기 실패");
      }
    };
    
    fetchData();

    if(uploadSuccess) {
      setUploadSuccess(false);
    }
  }, [uploadSuccess, currentYear, currentMonth]);

  

  const handleYearChange = (event) => {
    setCurrentYear(parseInt(event.target.value, 10));
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
  };

  

  const handleBoxClick = (day) => {
    if(day !== null) {
      const selectedDate = `${currentYear}-${currentMonth}-${day}`;
      console.log(selectedDate)

      // 이미지가 있는 경우 상세 페이지 이동
      if (uploadedImages[selectedDate]) {
        console.log('이미지 있음')
        navigate(`/photo/${selectedDate}`, 
          { state: { 'year': currentYear, 'month': currentMonth, 'day': day}})
      } 
      else {
        // 이미지가 없는 경우 파일 업로드 처리
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        fileInput.addEventListener('change', async (event) => {
          const file = event.target.files[0];
          console.log(file)
          
          if (file && file.type.startsWith('image/')) {
            // const updatedImages = { ...uploadedImages };
            // updatedImages[selectedDate] = window.URL.createObjectURL(file);
            // setUploadedImages(updatedImages);

            const month = `${currentYear}-${currentMonth}`;
            const date = `${day}`

            const formData = {
              'img': file,
              'month': month,
              'date': date,
              'groupMemberId': 1
            }
  
            try {
              const response = await axios.post('http://3.36.63.145:8080/api/photo', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
              setUploadSuccess(true)
            } catch(error) {
              console.log('파일 업로드 요청 실패')
            }
          } else {
            alert('이미지 파일을 업로드 해주세요.');
          }
        });

        fileInput.click();
      }
    }
  };

  
  
  return (
    <div className='calendarWrapper'>
      <div className='dateContainer'>
        <div className='yearContainer'>
          <select value={currentYear} onChange={handleYearChange}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}년
              </option>
            ))}
          </select>
        </div>
        <div className='monthContainer'>
          <div onClick={handlePrevMonth}><Left style={{cursor: "pointer"}} /></div>
          <div className='monthText'>{`${currentMonth}월`}</div>
          <div onClick={handleNextMonth}><Right style={{ cursor: "pointer" }} /></div>
        </div>
      </div>
      
      {generateBoxNum(currentYear, currentMonth).map((row, rowIndex) => (
        <div className='calendarContainer' key={rowIndex}>
          {row.map((day, index) => (
            <CalendarBox 
            key={index} 
            number={day}
            onClick={() => handleBoxClick(day)}
            uploadedImage={uploadedImages[`${currentYear}-${currentMonth}-${day}`]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}