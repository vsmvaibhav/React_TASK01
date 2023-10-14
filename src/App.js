import React, { useState } from 'react';
import './App.css';

var wordCount;
function App() {
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
  };

  return (
    <>
      <div className="center-container">
        <h1>Responsive Paragraph Word Counter</h1>
        <input type="text" onChange={handleInputChange} style={{ top : "0" }}/>
      <p>Word Count: {wordCount}</p>
      </div>
    </>
  );
}

export default App;
