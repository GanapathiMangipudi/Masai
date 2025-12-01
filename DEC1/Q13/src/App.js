import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Header />

      <Section title="Section One">
        <Card title="Card A" description="This is card A content." />
        <Card title="Card B" description="This is card B content." />
      </Section>

      <Section title="Section Two">
        <Button label="Click Me" onClick={() => alert("Button clicked!")} />
      </Section>

      <Footer />
    </div>
  );
}

export default App;
