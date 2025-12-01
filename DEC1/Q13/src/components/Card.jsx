import React from "react";

function Card({ title, description }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "8px",
    width: "250px",
    margin: "10px",
    backgroundColor: "white"
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px"
  };

  const descStyle = {
    color: "#333"
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <p style={descStyle}>{description}</p>
    </div>
  );
}

export default Card;
