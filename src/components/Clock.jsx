import { useEffect, useState } from 'react';

export const Clock = ({ currentSession }) => {
  const [sessionDuration, setSessionDuration] = useState('');

  const calculateTimeElapsed = (startTime) => {
    const today = new Date(startTime);
    const endDate = new Date();
    const hours = parseInt((Math.abs(endDate - today) / (1000 * 60 * 60)) % 24);
    const minutes = parseInt(
      (Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60
    );
    const seconds = parseInt(
      (Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60
    );
    const _hours = hours < 10 ? `0${hours}` : hours;
    const _minutes = minutes < 10 ? `0${minutes}` : minutes;
    const _seconds = seconds < 10 ? `0${seconds}` : seconds;

    setSessionDuration(`${_hours} : ${_minutes} : ${_seconds}`);
  };

  useEffect(() => {
    let intervalId;

    if (currentSession) {
      intervalId = setInterval(() => {
        calculateTimeElapsed(currentSession['created_at']);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [currentSession]);

  return (
    <>
      {sessionDuration && (
        <h3>
          {!currentSession && 'Last '}Session Duration: {sessionDuration}
        </h3>
      )}
    </>
  );
};
