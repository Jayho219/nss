import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowEvent = () => {

  const location = useLocation();
  const event = location.state?.event;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/showUsers');
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleAttendance = async (userId, userEmail) => {
    try {
      const response = await fetch('http://localhost:5000/takeAttendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName: event.eventName,
          userEmail: userEmail,
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Update the attendance status
        setUserData((prevData) =>
          prevData.map((user) =>
            user._id === userId ? { ...user, attendance: 'Present' } : user
          )
        );
      }
    } catch (error) {
      console.error('Error taking attendance:', error);
    }
  };

  return (
    <div>
      <h1>Event Details</h1>
      {event && (
        <div>
          <h3>Event Name: {event.eventName}</h3>
          <p>Start Date: {event.startDate}</p>
          <p>Start Time: {event.startTime}</p>
          <p>End Date: {event.endDate}</p>
          <p>End Time: {event.endTime}</p>
        </div>
      )}
      <h1>User Data</h1>
      {userData.map((user) => (
        <div key={user._id}>
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Course: {user.course}</p>
            <p>Branch: {user.branch}</p>
            <p>Year: {user.year}</p>
          </div>
          <div>
          <button onClick={() => handleAttendance(user._id, user.email)}>
  {user.events.includes(event.eventName) ? 'Present' : 'Absent'}
</button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowEvent;
