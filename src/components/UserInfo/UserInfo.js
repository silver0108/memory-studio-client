import RoundButton from "../common/RoundButton";
import './UserInfo.css'

export default function UserInfo() {

  const buttonClick = () => {
    alert('공유')
  }
  return (
    <div className="usreInfoWrapper">
      <div className="userContainer">
        <div style={{color: "#FFFFFF", fontSize: "25px", fontWeight: "bold"}}>User 1</div>
        <div style={{color: "#C7C7C7"}}>n일째 기록 중 어쩌고</div>
      </div>
      <RoundButton 
        message="공유하기" 
        onClick={buttonClick} 
        color="#000000" 
        backgroundColor="#EDEDED"
      />
    </div>
  )
}