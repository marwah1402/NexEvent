import React, { useState, useEffect } from "react";
import API from "../../services/api";
import "./Guests.css";

const Guests = () => {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await API.get("/api/guests");
        setGuests(response.data);
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
    };

    fetchGuests();
  }, []);

  const addGuest = async () => {
    try {
      const response = await API.post("/api/guests", newGuest);
      setGuests([...guests, response.data]);
      setNewGuest({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error adding guest:", error);
    }
  };

  const removeGuest = async (id) => {
    try {
      await API.delete(`/api/guests/${id}`);
      setGuests(guests.filter((guest) => guest._id !== id));
    } catch (error) {
      console.error("Error removing guest:", error);
    }
  };

  return (
    <div className="guests">
      <h1>Manage Guests</h1>
      <div className="add-guest">
        <input
          type="text"
          placeholder="Name"
          value={newGuest.name}
          onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newGuest.email}
          onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={newGuest.phone}
          onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
        />
        <button onClick={addGuest}>Add Guest</button>
      </div>
      <ul>
        {guests.map((guest) => (
          <li key={guest._id}>
            <p>{guest.name} ({guest.email})</p>
            <button onClick={() => removeGuest(guest._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guests;
