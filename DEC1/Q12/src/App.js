import React from "react";
import Card from "./Card";

function App() {
  const containerStyle = {
    display: "flex",
    gap: "20px",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <Card title="Card One">
        <p>This is the content of the first card.</p>
      </Card>

      <Card title="Card Two">
        <p>This card contains different content.</p>
      </Card>

      <Card title="Card Three">
        <p>You can put any JSX inside using children!</p>
      </Card>
    </div>
  );
}

export default App;
