import { useState } from 'react';
import FirstNameBox from './components/FirstNameBox';
import LastNameBox from './components/LastNameBox';
import Email from './components/Email';
import Phone from './components/Phone';
import Supervisor from './components/Supervisor';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'tailwindcss/tailwind.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [supervisor, setSupervisor] = useState(null);

  const handleSubmit = () => {
    if (firstName && lastName  && (email || phone) && supervisor) {
      const postBody = { firstName, lastName, email, phone, supervisor };
      axios.post('http://localhost:4000/api/submit', postBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  const isSubmitDisabled = () => {
    if (firstName && lastName  && (email || phone) && supervisor) { 
      return false;
    }
    return true;
  }

  const getSubmitColor = () => {
    if (isSubmitDisabled()) {
      return 'bg-gray-500 cursor-default';
    }
    return 'active-submit-button';
  };

  return (
    <div className="flex w-full h-full bg-gradient-to-b from-indigo-500 to-blue-400 min-h-form">
      <div className=" relative p-8 w-3/5 h-form max-w-3xl max-h-form min-h-form min-w-min bg-gray-800 self-center mr-auto ml-auto rounded-2xl">
        <h1 className="text-2xl text-white inline font-medium">Notification </h1>
        <h1 className="text-2xl text-indigo-400 inline font-semibold">Form</h1>
        <form>
          <FirstNameBox setFirstName={setFirstName} />
          <LastNameBox setLastName={setLastName} />
          <hr className="solid mt-5 border-gray-900 border-2" />
          <span className="text-gray-400 font-semibold text-xs">
            *Please Fill Out Whichever You Prefer
          </span>
          <Email setEmail={setEmail} fieldName="email" />
          <div className="mt-4">
            <span className="text-gray-400 font-semibold">or</span>
          </div>
          <Phone setPhone={setPhone} fieldName="phone" />
          <hr className="solid mt-5 border-gray-900 border-2" />
          <Supervisor setSupervisor={setSupervisor} />
        </form>
        <button
          type="button"
          id="submit-button"
          className={`${getSubmitColor()}`}
          onClick={handleSubmit}
          disabled={isSubmitDisabled()}
        >
          SUBMIT
          <FontAwesomeIcon icon={faChevronCircleRight} className="ml-1 fa-md" />
        </button>
      </div>
    </div>
  );
}

export default App;
