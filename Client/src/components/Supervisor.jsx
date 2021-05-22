import { useEffect, useState } from 'react';
import axios from 'axios';
import './Supervisor.css';

const Supervisor = ({ setSupervisor }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/supervisors').then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    });
    return function cleanup() {};
  }, []);

  const handleSupervisorSelect = (event) => {
    const value = event.target.value;
    setSupervisor(value);
  };

  return (
    <div className="mt-4">
      <label className="text-gray-400 font-semibold h-10">Supervisor</label>
      <div className="box mt-1 border-gray-700 border-2 max-w-min h-10">
        <select
          className="bg-form h-10"
          defaultValue={'Select Supervisor'}
          onChange={handleSupervisorSelect}
        >
          <option disabled>Select Supervisor</option>
          { data && 
            data.map((supervisor) => {
              return <option key={supervisor}>{supervisor}</option>;
            })
          }
        </select>
      </div>
    </div>
  );
};

export default Supervisor;
