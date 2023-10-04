import React, { useState } from 'react';
import './App.css';

function App() {
  const [runs, setRuns] = useState(0);
  const [fours, setFours] = useState(0);
  const [six, setSix] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [maidens, setMaidens] = useState(0);
  const [catches, setCatches] = useState(0);
  const [runOut, setRunOut] = useState(0);
  const [score, setScore] = useState(0);

  const calculateScore = () => {
    let calculatedScore =
      runs +
      fours +
      2 * six +
      25 * wickets +
      12 * maidens +
      6 * (catches + runOut);

    if (runs >= 100) {
      calculatedScore += 16;
    } else if (runs >= 50) {
      calculatedScore += 8;
    } else if (runs >= 30) {
      calculatedScore += 4;
    } 

    if (wickets >= 5) {
      calculatedScore += 16;
    } else if (wickets === 4) {
      calculatedScore += 8;
    } else if (wickets === 3) {
      calculatedScore += 4;
    }

    setScore(calculatedScore);
  };

  return (
    <div className="App">
      <h1>Cricket Score Calculator</h1>
      <div>
  <label>
    Runs:
    <input
      type="number"
      value={runs}
      onChange={(e) => setRuns(parseInt(e.target.value, 10))}
    />
  </label>
</div>
<div>
  <label>
    Fours:
    <input
      type="number"
      value={fours}
      onChange={(e) => setFours(parseInt(e.target.value, 10))}
    />
  </label>
</div>
<div>
  <label>
    Six:
    <input
      type="number"
      value={six}
      onChange={(e) => setSix(parseInt(e.target.value, 10))}
    />
  </label>
</div>
<div>
  <label>
    Wickets:
    <input
      type="number"
      value={wickets}
      onChange={(e) => setWickets(parseInt(e.target.value, 10))}
    />
  </label>
</div>
<div>
  <label>
    Maidens:
    <input
      type="number"
      value={maidens}
      onChange={(e) => setMaidens(parseInt(e.target.value, 10))}
    />
  </label>
</div>
<div>
  <label>
    Catches:
    <input
      type="number"
      value={catches}
      onChange={(e) => setCatches(parseInt(e.target.value, 10))}
    />
  </label>
</div>
<div>
  <label>
    Run Out:
    <input
      type="number"
      value={runOut}
      onChange={(e) => setRunOut(parseInt(e.target.value, 10))}
    />
  </label>
</div>
      <button onClick={calculateScore}>Submit</button>
      <div>
        <h2>Score: {score}</h2>
      </div>
    </div>
  );
}

export default App;
