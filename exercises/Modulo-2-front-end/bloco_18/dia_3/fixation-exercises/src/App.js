import React from "react";
import useTimer from './hooks/useTimer'

function App() {
  const { timer, randomNumber, multipleByThree, multipleByFive } = useTimer();
  return (
    <div style={{textAlign:"center"}}>
      <h1>{ `Timer: ${timer}` }</h1>
      <h2>{ `Random number: ${randomNumber}` }</h2>
      <h3>{ multipleByThree }</h3>
      <h3>{ multipleByFive }</h3>
    </div>
  );
}

export default App;
