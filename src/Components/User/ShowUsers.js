import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ShowUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/showUsers')
      const data = await response.json();
      setUsers(data);
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleViewMore = (user) => {
    console.log(users);
    // Preserve the event details and navigate to the 'currentEvent' component
    navigate(`/showUser`, { state: { user } });
  };
  
  return (
    <div>
      <div>
        <h2>User List</h2>
        {users.map((user) => (
          <div key={user.name}>
            {user.name}
            <button onClick={() => handleViewMore(user)}>
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowUsers;
