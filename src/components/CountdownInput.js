import React, { useState } from "react";

const CountdownInput = ({ startTime, onStart, onInputChange }) => {
  const [inputValue, setInputValue] = useState(startTime);

  return (
    <div>
      <input
        type="number"
        className="border border-zinc-500 rounded-xl p-2 mr-2 text-center font-bold"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        min="0"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded font-semibold tracking-[2px]"
        onClick={() => {
          onStart();
          onInputChange(inputValue);
        }}
      >
        Start Countdown
      </button>
    </div>
  );
};

export default CountdownInput;
