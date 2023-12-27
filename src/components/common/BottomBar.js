import { useNavigate } from 'react-router-dom';
import { Calendar, Home2, Telegram } from '../../assets';
import './BottomBar.css'

export default function BottomBar() {
  const navigate = useNavigate();

  return (
    <div className="BottomBarWrapper">
      <Home2 onClick={()=> navigate('/')}/>
      <Calendar onClick={() => navigate('/calendar')} />
      <Telegram onClick={() => navigate('/letter')} />
    </div>
  );
}