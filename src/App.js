import './App.css';
import React, { useState } from "react";
import BreakInterval from "./components/BreakInterval";
import SessionInterval from "./components/SessionInterval";
import Timer from "./components/Timer";

function App() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const onIncreaseBreakLength = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength => breakLength + 1);
    }
  };

  const onDecreaseBreakLength = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength => breakLength - 1);
    }
  };

  const onIncreaseSessionLength = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength => sessionLength + 1);
    }
  };

  const onDecreaseSessionLength = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength => sessionLength - 1);
    }
  };

  const onReset = () => {
    setSessionLength(25);
    setBreakLength(5);
  };

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="row">
        <div id="break-label" className="col">
          <BreakInterval 
            breakInterval={breakLength} 
            increaseBreak={onIncreaseBreakLength} 
            decreaseBreak={onDecreaseBreakLength} 
          />
        </div>
        
        <div id="session-label" className="col">
          <SessionInterval 
            sessionInterval={sessionLength}  
            increaseSession={onIncreaseSessionLength} 
            decreaseSession={onDecreaseSessionLength} 
          />
        </div>    
      </div>

      <div className="row">
          <div id="timer-label" className="col">
            <Timer 
              breakLength = {breakLength}
              sessionLength = {sessionLength}
              increaseBreak = {onIncreaseBreakLength}
              reset = {onReset}
            />
          </div>
        </div>
    </div>
  );
}

export default App;