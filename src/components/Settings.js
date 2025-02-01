import React from "react";

const Settings = ({ workDuration, shortBreakDuration, longBreakDuration, setWorkDuration, setShortBreakDuration, setLongBreakDuration }) => {
  return (
    <div className="settings">
      <h3>Configuración</h3>
      <div className="setting-item">
        <label>Sesión de Trabajo (min):</label>
        <input
          type="number"
          value={workDuration / 60}
          onChange={(e) => setWorkDuration(Number(e.target.value) * 60)}
          min="1"
        />
      </div>
      <div className="setting-item">
        <label>Descanso Corto (min):</label>
        <input
          type="number"
          value={shortBreakDuration / 60}
          onChange={(e) => setShortBreakDuration(Number(e.target.value) * 60)}
          min="1"
        />
      </div>
      <div className="setting-item">
        <label>Descanso Largo (min):</label>
        <input
          type="number"
          value={longBreakDuration / 60}
          onChange={(e) => setLongBreakDuration(Number(e.target.value) * 60)}
          min="1"
        />
      </div>
    </div>
  );
};

export default Settings;