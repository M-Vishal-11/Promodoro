import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [hrs, setHrs] = useState(25);  
  const [mns, setMns] = useState(0);   
  const timerInterval = useRef(null);

  function timer() {
    setMns((prevMns) => {
      if (prevMns === 0) {
        
        if (hrs === 0) {
          clearInterval(timerInterval.current);
          timerInterval.current = null;
          return 0;
        } else {
          
          setHrs((prevHrs) => prevHrs - 1);
          return 59;
        }
      } else {
        return prevMns - 1;
      }
    });
  }

  function start() {
    if (!timerInterval.current) {
      timerInterval.current = setInterval(timer, 1000);
    }
  }

  function stop() {
    clearInterval(timerInterval.current);
    timerInterval.current = null;
    setHrs(25);  
    setMns(0);   
  }

  return (
    <div className='body-container'>
      <div className='title-container'>
        <h1 className="title">Pomodoro Timer</h1>
      </div>
      <div className="promo-container">
        <p className="promo">
          {String(hrs).padStart(2, '0')}:{String(mns).padStart(2, '0')}
        </p>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={start}>Start</button>
        <button className="btn" onClick={stop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
