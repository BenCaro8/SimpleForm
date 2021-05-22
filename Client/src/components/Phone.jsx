import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelected, removeSelected, setSelected } from '../utils/reducers/singleSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Phone = ({ setPhone, fieldName }) => {
  const dispatch = useDispatch();
  const selected = useSelector(getSelected);
  const [input, setInput] = useState('');
  const [valid, setValid] = useState(false);

  const changeInputEvent = (event) => {
    const inputStr = event.target.value;
    const VALID_PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setInput(inputStr);

    if (!selected) {
      dispatch(setSelected(fieldName));
    }

    if (inputStr.match(VALID_PHONE_REGEX)) {
      setValid(true);
      setPhone(inputStr);
    } else if (!inputStr && selected === fieldName) {
      setPhone('');
      dispatch(removeSelected(''));
    } else {
      setValid(false);
      setPhone('');
    }
  };

  const isValidPhone = () => {
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
        Phone
        <FontAwesomeIcon icon={faPhoneAlt} className="ml-2 fa-md" />
      </label>
      <input
        id={fieldName}
        pattern="/[^a-zA-Z]/g"
        type="text"
        value={input}
        onChange={changeInputEvent}
        disabled={isDisabled()}
        className={`pl-2 mt-1 w-full inline min-w-input h-10 font-semibold text-white ${getBackgroundColor()} ${isValidPhone()} border-2`}
      ></input>
    </div>
  );
};

export default Phone;
