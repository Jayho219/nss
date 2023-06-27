import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ShowAdmins() {
  const navigate = useNavigate();
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/showAdmins')
      const data = await response.json();
      setAdmins(data);
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleViewMore = (admin) => {
    console.log(admins);
    // Preserve the event details and navigate to the 'currentEvent' component
    navigate(`/showAdmin`, { state: { admin } });
  };
  
  return (
    <div>
      <div>
        <h2>User List</h2>
        {admins.map((admin) => (
          <div key={admin.name}>
            {admin.name}
            <button onClick={() => handleViewMore(admin)}>
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowAdmins;
