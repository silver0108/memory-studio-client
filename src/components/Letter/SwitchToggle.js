import React, { useState } from 'react'
import "./SwitchToggle.css"

function SwitchToggle () {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };
  
  return (
    <div className='letter_switchtoggle'>
        <input type="checkbox" id="toggle" checked={isChecked} onChange={handleToggle} hidden/> 
        <label for="toggle" className="toggleSwitch">
          <span className="toggleButton"></span>
          <span className={`toggletext_${(isChecked) ? "complete" : "all"}`}>{isChecked ? "확인 편지" : "모든 편지"}</span>
        </label>
        
    </div>
  )
}

export default SwitchToggle