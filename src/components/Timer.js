import { useEffect, useState } from "react";
import "./Timer.css"

const Timer = ({breakLength, sessionLength, reset}) => {
  const [ isSession, setIsSession ] = useState(true);
  const [ timer, setTimer ] = useState({second: 0, minute: 25});
  const [ currentIntervalId, setCurrentIntervalId] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    setTimer({second: 0, minute: sessionLength});
  }, [sessionLength]);


  const handlePlayAndStop = () => {
    if (isPlay === false) {
      let intervalId = setInterval(decreaseTimer, 20);
      setIsPlay(true);
      setCurrentIntervalId(intervalId);
    } else {
      clearInterval(currentIntervalId);
      setIsPlay(false);
      }
  };
  const audio = document.getElementById("beep");

  const decreaseTimer = () => {
    console.log('decreaseTimer');
    setTimer(timer => {
      switch (timer.second) {
        case 0: 
          if (timer.minute === 0) {
            
            audio.play();
            setIsSession(isSession => !isSession);
            console.log()
            if (!isSession) {
              setTimer({second: 0, minute: sessionLength});
            } else {
              setTimer({second: 0, minute: breakLength});
            }
          }
          return {
            second: 59, 
            minute: timer.minute - 1
          };
        default: 
          return {
            second: timer.second - 1, 
            minute: timer.minute
          }; 
      } 
    });

  };

  const handleRefresh = () => {
    clearInterval(currentIntervalId);
    setCurrentIntervalId(0);
    reset();
    setTimer({second: 0, minute: 25});
    setIsSession(true);
    setIsPlay(false);
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div id="" > 
      <section className="timer-container">
        <h3>{isSession === true ? "Session" : "Break"}</h3>
        <div id="time-left">
          <span className="timer">
            {timer.minute === 0 
            ? "00" 
            : timer.minute >= 10
            ? timer.minute
            : "0" + timer.minute
            }
          </span>
          <span className="timer">:</span>
          <span className="timer">
            {timer.second === 0 
            ? "00" 
            : timer.second < 10
            ? "0" + timer.second
            : timer.second}    
          </span>
        </div>
        
      </section>
      <section className="timer-actions"> 
        <button id="start_stop" onClick={handlePlayAndStop}>Play/Stop</button>    
        <button id="reset" onClick={handleRefresh}>Refresh</button>  
      </section>

      <audio 
        id="beep" 
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default Timer;