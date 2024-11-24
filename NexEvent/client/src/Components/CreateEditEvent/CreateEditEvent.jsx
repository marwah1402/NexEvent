import React, { useState } from "react";
import "./CEE.css"; // Add CSS styles specific to this component

const CreateEditEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    category: "Birthday", // Default category
  });

  const categories = ["Birthday", "Wedding", "Conference", "Workshop", "Party"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Details Submitted:", event);

    // You can replace this console log with an API call to save the event details
    alert("Event created/updated successfully!");
  };

  return (
    <div className="create-edit-container">
      <h1>Create / Edit Event</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={event.title}
            onChange={handleChange}
            placeholder="Enter event title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={event.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={event.location}
            onChange={handleChange}
            placeholder="Enter event location"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={event.description}
            onChange={handleChange}
            placeholder="Provide a short description of the event"
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={event.category}
            onChange={handleChange}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Save Event
        </button>
      </form>
    </div>
  );
};

export default CreateEditEvent;
