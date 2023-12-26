import './CalendarBox.css'

export default function CalendarBox({ number, onClick, uploadedImage }) {
  return (
    <div className='calendarBoxWrapper' onClick={onClick}>
      <div className='verticalBar'></div>
      <div className='boxContainer'>
        <div>{number}</div>
        <div className='imgContainer'>
          {uploadedImage ? 
            <img src={uploadedImage} alt="Uploaded" style={{width: "8vw", height: "8vw"}}/> 
            : null}
        </div>
        
      </div>
    </div>

  );
};

