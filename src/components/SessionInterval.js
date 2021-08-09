import "./SessionInterval.css"

const SessionInterval = ( {sessionInterval, increaseSession, decreaseSession}) => {
  return (
    <div className="interval-container"> 
      <h5>Session Length</h5>
      <div id="container2">
        <button id="session-decrement" onClick={decreaseSession}>Down</button>
        <p id="session-length" className="interval-length">{sessionInterval}</p>
        <button id="session-increment" onClick={increaseSession}>Up</button>
      </div>
    </div>
  )
}

export default SessionInterval;