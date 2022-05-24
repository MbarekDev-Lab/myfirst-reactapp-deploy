import { useContext } from 'react';
import { StopWatchContext } from '../context/StopWatchContext';

const StopWatch = () => {
  const { time, setTime, start, setStart } = useContext(StopWatchContext);
  console.log(time, setTime, start, setStart)

  return (
    <div>
      <p style={{ fontSize: '50px' }}>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
        <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
      </p>

      {start && <button onClick={() => setStart(false)}>Stop</button>}
      {!start && time === 0 && (
        <button onClick={() => setStart(true)}>Start</button>
      )}
      {!start && time > 0 && (
        <button onClick={() => setStart(true)}>Resume</button>
      )}
      {!start && time > 0 && <button onClick={() => setTime(0)}>Reset</button>}
    </div>
  );
};

export default StopWatch;
