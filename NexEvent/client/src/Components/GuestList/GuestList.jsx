import React, { useState } from "react";
import "./GuestList.css";

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({ name: "", email: "", phone: "" });

  // Add a new guest
  const addGuest = () => {
    if (newGuest.name && newGuest.email && newGuest.phone) {
      setGuests([...guests, { ...newGuest, rsvp: "Pending" }]);
      setNewGuest({ name: "", email: "", phone: "" });
    } else {
      alert("Please fill in all fields!");
    }
  };

  // Update RSVP status
  const updateRSVP = (index, status) => {
    const updatedGuests = [...guests];
    updatedGuests[index].rsvp = status;
    setGuests(updatedGuests);
  };

  // Remove a guest
  const removeGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
    setGuests(updatedGuests);
  };

  // Send invitations (Mock function for now)
  const sendInvitations = () => {
    alert("Invitations sent!");
  };

  return (
    <div className="guest-list">
      <h1>Guest List Management</h1>
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

      {guests.length > 0 ? (
        <div>
          <h2>Guest List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>RSVP</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest, index) => (
                <tr key={index}>
                  <td>{guest.name}</td>
                  <td>{guest.email}</td>
                  <td>{guest.phone}</td>
                  <td>{guest.rsvp}</td>
                  <td>
                    <button onClick={() => updateRSVP(index, "Accepted")}>
                      Accept
                    </button>
                    <button onClick={() => updateRSVP(index, "Declined")}>
                      Decline
                    </button>
                    <button onClick={() => removeGuest(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="send-invitations" onClick={sendInvitations}>
            Send Invitations
          </button>
        </div>
      ) : (
        <p>No guests added yet!</p>
      )}
    </div>
  );
};

export default GuestList;
