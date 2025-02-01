import React from "react";

const Timer = ({ sessionType, timeLeft, isRunning, startTimer, stopTimer, resetTimer }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="timer">
      <h2>{sessionType}</h2>
      <h3>{formatTime(timeLeft)}</h3>
      <div className="controls">
        {!isRunning ? (
          <button onClick={startTimer}>Iniciar</button>
        ) : (
          <button onClick={stopTimer}>Detener</button>
        )}
        <button onClick={resetTimer}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Timer;