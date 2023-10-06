import React, { useState } from "react";
import NFTDescriptionInput from './NFTDescriptionInput';
import ImageSelection from './ImageSelection';

const FinalNFT = ({ selectedImage, setfName, setfSymbol }) => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  
    const [selectedImages, setSelectedImages] = useState([]);
    const [images, setImages] = useState([]); // Add state for images
  
    // Function to update the images state
    const updateImages = (newImages) => {
      setImages(newImages);
    };
  const handleNameChange = (e) => {
    setName(e.target.value);
  
  }
  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  }
  
  return (
    <div>
      <h2>Finalize Your NFT</h2>
      <NFTDescriptionInput setImages={updateImages} />
      <ImageSelection selectedImages={selectedImages} setSelectedImages={setSelectedImages} images={images} />
    
      <div className="selected-image">
        <img src={selectedImage.url} alt="Selected NFT" />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Symbol:</label>
        <input type="text" value={symbol} onChange={handleSymbolChange} />
      </div>
    </div>
  );
};

export default FinalNFT;
