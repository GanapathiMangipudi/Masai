function Button({ label, onClick }) {
  const btnStyle = {
    background: "#3498db",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return <button style={btnStyle} onClick={onClick}>{label}</button>;
}

export default Button;
