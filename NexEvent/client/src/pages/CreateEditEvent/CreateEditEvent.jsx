import React, { useState } from 'react';
import './CreateEditEvent.css';

const CreateEditEvent = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventData = {
      title,
      date,
      time,
      location,
      description,
      category,
    };

    try {
      const response = await fetch('http://localhost:8080/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        alert('Event created successfully!');
      } else {
        const errorData = await response.json();
        alert(`Failed to create event: ${errorData.message}`);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="create-edit-event">
      <h2>Create/Edit Event</h2>
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
          placeholder="Event Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          placeholder="Event Time"
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
        <button type="submit">Save Event</button>
      </form>
    </div>
  );
};

export default CreateEditEvent;