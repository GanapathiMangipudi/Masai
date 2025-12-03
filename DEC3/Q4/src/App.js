import { useState } from "react";


function CorrectedText({ text, corrections }) {

  const words = text.split(" ");

  let correctedCount = 0;

  const correctedWords = words.map((word) => {
    const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");
    if (corrections[cleanWord]) {
      correctedCount++;

      // Keep original punctuation (if any)
      const punctuation = word.match(/[.,!?]/g);
      return corrections[cleanWord] + (punctuation ? punctuation.join("") : "");
    }

    return word;
  });

  return (
    <div style={{ marginTop: "10px" }}>
      <p>
        <strong>Corrected:</strong> {correctedWords.join(" ")}
      </p>
      <p>Words corrected: {correctedCount}</p>
    </div>
  );
}

export default function AutoCorrectApp() {
  const [inputText, setInputText] = useState("");

  const corrections = {
    teh: "the",
    recieve: "receive",
    adress: "address",
    wierd: "weird",
    thier: "their",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>AutoCorrect App</h2>

      <input
        type="text"
        value={inputText}
        placeholder="Type something..."
        onChange={(e) => setInputText(e.target.value)}
        style={{
          padding: "10px",
          width: "90%",
          fontSize: "16px",
          marginBottom: "15px",
        }}
      />

      <CorrectedText text={inputText} corrections={corrections} />
    </div>
  );
}
