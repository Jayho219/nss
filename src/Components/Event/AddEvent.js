import React, { useState } from 'react';
import Home from '../Home'

const NewEventForm = () => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    }

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/addEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, startDate, endDate}),
      });

      console.log(name, startDate, endDate);
      const data = await response.json();

      if (data.success) {
        console.log('Event created successfully!');
        setIsLoggedIn(true);
      } 
      else {
        console.error('Failed to create event');
        setIsLoggedIn(false);
      }
    } 
    catch (error) {
      console.error('Error creating event:', error);
    }
  };

  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange}  />
        </div>
        <div>
            <label>Start Date:</label>
            <input type="date" value={startDate} onChange={handleStartDateChange} />
        </div>
        <div>
            <label>End Date:</label>
            <input type="date" value={endDate} onChange={handleEndDateChange} />
        </div>
        <button type="submit">Create Event</button>
    </form>
    </div>
  );
};

export default NewEventForm;
