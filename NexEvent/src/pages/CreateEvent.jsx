import React, { useState } from "react";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({ name: "", date: "", location: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Event Name" onChange={(e) => setEventData({ ...eventData, name: e.target.value })} />
      <input type="date" onChange={(e) => setEventData({ ...eventData, date: e.target.value })} />
      <input type="text" placeholder="Location" onChange={(e) => setEventData({ ...eventData, location: e.target.value })} />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
