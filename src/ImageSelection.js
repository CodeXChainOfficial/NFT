// components/ImageSelection.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageSelection = ({ selectedImages, setSelectedImages, images }) => {
  const handleImageClick = (image) => {
    const isSelected = selectedImages.includes(image);

    if (isSelected) {
      setSelectedImages(selectedImages.filter((selected) => selected !== image));
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  return (
    <div>
      <h2>Choose Your Preferred Images</h2>
      <div className="image-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`image ${selectedImages.includes(image) ? 'selected' : ''}`}
            onClick={() => handleImageClick(image)}
          >
            <img src={image.url} alt={`NFT Image ${image.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSelection;
