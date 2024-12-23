import React, { useState } from 'react';
import './CreateEditEvent.css';

const CreateEditEvent = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [guests, setGuests] = useState([]);
  const [guest, setGuest] = useState({ name: '', email: '', phone: '' });

  const handleAddGuest = () => {
    if (guest.name && guest.email) {
      setGuests([...guests, guest]);
      setGuest({ name: '', email: '', phone: '' });
    } else {
      alert('Please fill in both name and email for the guest.');
    }
  };

  const handleRemoveGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to create an event.');
      return;
    }

    let userId = null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decode the token without using jwt-decode
      userId = payload.id;
    } catch (error) {
      console.error('Failed to decode token:', error);
      alert('Invalid token. Please log in again.');
      return;
    }

    const eventData = {
      title,
      date,
      time,
      location,
      description,
      category,
      guests,
      createdBy: userId, // Add the creator ID
    };

    try {
      const response = await fetch('http://localhost:8080/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        alert('Event created successfully!');
        setTitle('');
        setDate('');
        setTime('');
        setLocation('');
        setDescription('');
        setCategory('');
        setGuests([]);
      } else {
        const errorData = await response.json();
        alert(`Failed to create event: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="create-edit-event">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Event Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Party">Party</option>
          <option value="Meeting">Meeting</option>
          <option value="Conference">Conference</option>
          <option value="Wedding">Wedding</option>
        </select>

        <h3>Guests</h3>
        <div className="guest-form">
          <input
            type="text"
            placeholder="Guest Name"
            value={guest.name}
            onChange={(e) => setGuest({ ...guest, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Guest Email"
            value={guest.email}
            onChange={(e) => setGuest({ ...guest, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Guest Phone"
            value={guest.phone}
            onChange={(e) => setGuest({ ...guest, phone: e.target.value })}
          />
          <button type="button" onClick={handleAddGuest}>
            Add Guest
          </button>
        </div>

        <ul>
          {guests.map((g, index) => (
            <li key={index}>
              {g.name} ({g.email}, {g.phone})
              <button type="button" onClick={() => handleRemoveGuest(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <button type="submit">Save Event</button>
      </form>
    </div>
  );
};

export default CreateEditEvent;
