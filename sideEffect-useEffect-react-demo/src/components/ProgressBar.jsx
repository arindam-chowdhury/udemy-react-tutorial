import { useState, useEffect } from 'react';

export default function ProgressBar({ timmer }) {
  const [remainingTime, setRemainingTime] = useState(timmer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timmer}/>;
}
