import React, { useState, useEffect } from "react";
import "./EventList.css";
import { Link } from "react-router-dom"; 

const EventList = () => {
  // Sample state for events (replace with API integration later)
  const [events, setEvents] = useState([]);

  // Simulating data fetch
  useEffect(() => {
    const fetchEvents = async () => {
      // Replace this with an API call in the future
      const sampleEvents = [
        { id: 1, title: "Birthday Party", date: "2024-12-01", category: "Birthday" },
        { id: 2, title: "Conference", date: "2024-12-10", category: "Business" },
        { id: 3, title: "Wedding", date: "2024-12-15", category: "Wedding" },
      ];
      setEvents(sampleEvents);
    };

    fetchEvents();
  }, []);

  // Delete Event Function
  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="event-list">
      <h1>Your Events</h1>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Category: {event.category}</p>
              <div className="actions">
                <button onClick={() => alert("View Details")}>View Details</button>
                <button onClick={() => alert("Edit Event")}>Edit</button>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found. Start creating one!</p>
      )}
    </div>
  );
};

export default EventList;
