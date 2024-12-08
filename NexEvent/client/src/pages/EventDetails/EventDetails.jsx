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
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await API.get(`/events/${id}`);
        setEvent(response.data);
        setEditedEvent(response.data); // Pre-fill the edit form
        setLoading(false);
      } catch (err) {
        setError("Failed to load event details.");
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleEditChange = (e) => {
    setEditedEvent({ ...editedEvent, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await API.put(`/events/${id}`, editedEvent);
      alert("Event updated successfully!");
      setEvent(editedEvent);
      setIsEditing(false);
    } catch (err) {
      alert("Failed to update event.");
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/events/${id}`);
      alert("Event deleted successfully!");
      navigate("/events"); // Navigate back to events page
    } catch (err) {
      alert("Failed to delete event.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="event-details">
      {!isEditing ? (
        <>
          <h1>{event.title}</h1>
          <p>Date: {new Date(event.date).toLocaleDateString()}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
          <p>Category: {event.category}</p>
          <div className="button-group">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
            <button className="back-btn" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>Edit Event</h1>
          <form>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={editedEvent.title || ""}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={new Date(editedEvent.date).toISOString().split("T")[0]}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Time:
              <input
                type="time"
                name="time"
                value={editedEvent.time || ""}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={editedEvent.location || ""}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={editedEvent.description || ""}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={editedEvent.category || ""}
                onChange={handleEditChange}
              />
            </label>
          </form>
          <div className="button-group">
            <button onClick={handleSave}>Save</button>
            <button className="back-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EventDetails;
