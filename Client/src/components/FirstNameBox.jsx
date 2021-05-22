import { useState } from 'react';

const FirstNameBox = ({ setFirstName }) => {
  const [input, setInput] = useState('');

  const changeInputEvent = (event) => {
    const inputStr = event.target.value;
    if (!inputStr.match(/[^a-z]/ig)) {
      setInput(inputStr);
      setFirstName(inputStr);
    }
  };

  return (
    <div className="mt-4">
      <label className="text-gray-400 font-semibold">
        First Name
      </label>
      <input
        id="first"
        pattern="/[^a-zA-Z]/g"
        type="text"
        value={input}
        onChange={changeInputEvent}
        className="pl-2 mt-1 w-full min-w-input h-10 font-semibold text-white bg-form border-gray-700 border-2"
      ></input>
    </div>
  );
}

export default FirstNameBox;
