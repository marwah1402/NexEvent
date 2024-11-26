import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await API.get(`/api/events/${id}`);
        setEvent(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load event details.");
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="event-details">
      <h1>{event.title}</h1>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      <p>Category: {event.category}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default EventDetails;
