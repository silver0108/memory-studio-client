export default function RoundButton({message, onClick, color, backgroundColor}) {
  return (
    <button
      onClick={onClick}
      style={{ 
        padding: "10px 30px",
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,
        border: "none",
        borderRadius: '30px',
        fontSize: '17px',
        fontWeight: 'bold',
        cursor: "pointer",
       }}>
      {message}
    </button>
  )
}