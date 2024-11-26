import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map((file) => URL.createObjectURL(file));
    setPhotos([...photos, ...newPhotos]);
  };

  return (
    <div className="gallery">
      <h1>Event Gallery</h1>
      <input type="file" multiple onChange={handleUpload} />
      <div className="photos">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Gallery ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
