import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import Settings from "./components/Settings";
import "./index.css";

function App() {
  const [sessionType, setSessionType] = useState("Work");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [workSessions, setWorkSessions] = useState(0);

  // Estados para la configuración personalizable
  const [workDuration, setWorkDuration] = useState(25 * 60); // 25 minutos
  const [shortBreakDuration, setShortBreakDuration] = useState(5 * 60); // 5 minutos
  const [longBreakDuration, setLongBreakDuration] = useState(15 * 60); // 15 minutos

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      handleSessionEnd();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleSessionEnd = () => {
    const audio = new Audio("/sound.mp3");
    audio.play();

    if (sessionType === "Work") {
      setWorkSessions((prevSessions) => prevSessions + 1);
      if (workSessions + 1 === 4) {
        setSessionType("Long Break");
        setTimeLeft(longBreakDuration);
      } else {
        setSessionType("Short Break");
        setTimeLeft(shortBreakDuration);
      }
    } else {
      setSessionType("Work");
      setTimeLeft(workDuration);
    }
  };

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setSessionType("Work");
    setTimeLeft(workDuration);
    setWorkSessions(0);
  };

  return (
    <div className="app">
      <h1>Pomodoro Timer</h1>
      <Settings
        workDuration={workDuration}
        shortBreakDuration={shortBreakDuration}
        longBreakDuration={longBreakDuration}
        setWorkDuration={setWorkDuration}
        setShortBreakDuration={setShortBreakDuration}
        setLongBreakDuration={setLongBreakDuration}
      />
      <Timer
        sessionType={sessionType}
        timeLeft={timeLeft}
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
      />
      <p>Sesiones completadas: {workSessions}</p>
    </div>
  );
}

export default App;