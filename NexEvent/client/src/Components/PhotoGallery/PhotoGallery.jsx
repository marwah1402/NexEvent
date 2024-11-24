import React, { useState } from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [uploadFile, setUploadFile] = useState(null);

  const handleFileChange = (e) => {
    setUploadFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (uploadFile) {
      setGallery([...gallery, URL.createObjectURL(uploadFile)]);
      setUploadFile(null);
    }
  };

  return (
    <div className="photo-gallery">
      <h1>Photo Gallery</h1>
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="gallery-section">
        {gallery.length > 0 ? (
          gallery.map((photo, index) => (
            <div key={index} className="gallery-item">
              <img src={photo} alt={`Event ${index}`} />
            </div>
          ))
        ) : (
          <p>No photos uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
