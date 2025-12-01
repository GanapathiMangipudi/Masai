import React from "react";

function Card({ title, children }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "250px",
    margin: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default Card;
