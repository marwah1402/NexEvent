import React from "react";
import "./EventDetails.css";
import { useParams } from "react-router-dom"; // To extract the event ID from the URL

const EventDetails = () => {
  const { id } = useParams(); // Get event ID from the route parameter

  // Sample event details (Replace with API call)
  const sampleEvent = {
    id: 1,
    title: "Birthday Party",
    date: "2024-12-01",
    time: "5:00 PM",
    location: "123 Main St, Cityville",
    description:
      "Join us for an evening of fun, food, and celebration as we celebrate John's birthday!",
    category: "Birthday",
    guests: ["Alice", "Bob", "Charlie"],
  };

  return (
    <div className="event-details">
      <h1>{sampleEvent.title}</h1>
      <p><strong>Date:</strong> {sampleEvent.date}</p>
      <p><strong>Time:</strong> {sampleEvent.time}</p>
      <p><strong>Location:</strong> {sampleEvent.location}</p>
      <p><strong>Category:</strong> {sampleEvent.category}</p>
      <p><strong>Description:</strong> {sampleEvent.description}</p>
      <h3>Guest List:</h3>
      <ul>
        {sampleEvent.guests.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
      <button className="back-button" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

export default EventDetails;
