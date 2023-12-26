export default function SquareButton({ message, onClick, color, backgroundColor }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 35px",
        margin: "5px",
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,
        border: "none",
        fontSize: '17px',
        cursor: "pointer",
      }}>
      {message}
    </button>
  )
}