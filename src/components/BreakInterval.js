import "./BreakInterval.css"

const BreakInterval = ( {breakInterval, increaseBreak, decreaseBreak}) => {
  return (
    <div className="interval-container"> 
      <h5>Break Length</h5>
      <div id="container1">
        <button id="break-decrement" onClick={decreaseBreak}>Down</button>
        <p id="break-length" className="interval-length">{breakInterval}</p>
        <button  id="break-increment" onClick={increaseBreak}>Up</button>
      </div>
    </div>
  )
}

export default BreakInterval;