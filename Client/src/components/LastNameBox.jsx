import { useState } from 'react';

const LastNameBox = ({ setLastName }) => {
  const [input, setInput] = useState('');

  const changeInputEvent = (event) => {
    const inputStr = event.target.value;
    if (!inputStr.match(/[^a-z]/gi)) {
      setInput(inputStr);
      setLastName(inputStr);
    }
  };

  return (
    <div className="mt-4">
      <label className="text-gray-400 font-semibold">
        Last Name
      </label>
      <input
        id="lastname"
        pattern="/[^a-zA-Z]/g"
        type="text"
        value={input}
        onChange={changeInputEvent}
        className="pl-2 mt-1 w-full min-w-input h-10 font-semibold text-white bg-form border-gray-700 border-2"
      ></input>
    </div>
  );
}

export default LastNameBox;
