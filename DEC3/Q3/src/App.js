import React from "react";

function ProfileCard({
  name = "Unknown User",
  age = "N/A",
  bio = "No biography provided.",
}) {
  // Truncate bio if longer than 100 characters
  const truncatedBio =
    bio.length > 100 ? bio.substring(0, 100) + "… Read More" : bio;

  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    margin: "10px auto",
    fontFamily: "Arial, sans-serif",
    background: "#fafafa",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const ageStyle = {
    color: "gray",
    marginBottom: "10px",
  };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={ageStyle}>Age: {age}</div>
      <p>{truncatedBio}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ProfileCard
        name="Ganapathi"
        age={25}
        bio="Post graduate student"
      />

      <ProfileCard age={40} />
      {/* Missing name & bio → default values will be used */}
    </div>
  );
}
