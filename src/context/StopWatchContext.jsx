import { createContext, useState , useEffect} from 'react';

export const StopWatchContext = createContext();


export const ContextProvider = (props) => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);
  
  return (
    <StopWatchContext.Provider value={{ time, setTime, start, setStart }}>
      {props.children}
    </StopWatchContext.Provider>
  );
};
