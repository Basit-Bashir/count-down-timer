import React, { useState } from "react";
import Countdown from "./components/Countdown";
import CountdownInput from "./components/CountdownInput";

function App() {
  const [startTime, setStartTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  function startCountdown() {
    setIsRunning(true);
  }
  function stopCountdown() {
    setIsRunning(false);
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" text-center border rounded-xl shadow-md shadow-black p-16">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-blue-900 via-green-500 to-orange-900 bg-clip-text tracking-[1px]">
          Countdown Timer
        </h1>
        {isRunning ? (
          <Countdown startTime={startTime} onStop={stopCountdown} />
        ) : (
          <CountdownInput
            startTime={startTime}
            onStart={startCountdown}
            onInputChange={(value) => setStartTime(value)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
