import React, { useEffect, useState } from "react";

function Countdown({ startTime, onStop }) {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    if (time > 0) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      onStop();
    }
  }, [time, onStop]);

  return (
    <div className="text-6xl font-bold text-red-500 mt-6">
      <div className="flex flex-col">
        {time} seconds
        <button
          onClick={onStop}
          className="text-black text-3xl mt-4 border border-black p-2 rounded-full hover:bg-red-800 hover:text-white hover:border-red-800"
        >
          Stop Timer
        </button>
      </div>
    </div>
  );
}

export default Countdown;
