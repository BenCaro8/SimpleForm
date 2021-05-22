import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelected, removeSelected, setSelected } from '../utils/reducers/singleSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Email = ({ setEmail, fieldName }) => {
  const dispatch = useDispatch();
  const selected = useSelector(getSelected);
  const [input, setInput] = useState('');
  const [valid, setValid] = useState(false);

  const changeInputEvent = (event) => {
    const inputStr = event.target.value;
    const VALID_EMAIL_REGEX =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setInput(inputStr);

    if (!selected) {
      dispatch(setSelected(fieldName));
    }

    if (inputStr.match(VALID_EMAIL_REGEX)) {
      setValid(true);
      setEmail(inputStr);
    } else if (!inputStr && selected === fieldName) {
      setEmail('');
      dispatch(removeSelected(''));
    } else {
      setValid(false);
      setEmail('');
    }
  };

  const isValidEmail = () => {
    if (valid && input) {
      return 'border-green-500';
    } else if (!valid && input !== '') {
      return 'border-red-500';
    }
    return 'border-gray-700';
  };

  const isDisabled = () => {
    if (selected && selected !== fieldName) {
      return true;
    }
    return false;
  };

  const getBackgroundColor = () => {
    if (isDisabled()) {
      return 'bg-gray-700';
    }
    return 'bg-form';
  };

  return (
    <div className="mt-4">
      <label className="text-gray-400 font-semibold block">
        Email 
        <FontAwesomeIcon icon={faEnvelope} className="ml-2 fa-md" />
      </label>
      <input
        id={fieldName}
        pattern="/[^a-zA-Z]/g"
        type="text"
        value={input}
        onChange={changeInputEvent}
        disabled={isDisabled()}
        className={`pl-2 mt-1 w-full inline min-w-input h-10 font-semibold text-white ${getBackgroundColor()} ${isValidEmail()} border-2`}
      ></input>
    </div>
  );
};

export default Email;
