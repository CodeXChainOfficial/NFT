import React, { useState } from "react";
import NFTDescriptionInput from "./NFTDescriptionInput";
import ImageSelection from "./ImageSelection";
import FinalNFT from "./FinalNFT";

function App() {
  const [nftDescription, setNFTDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // Define a state to store the 3 generated images from the API
  const [generatedImages, setGeneratedImages] = useState([]);

  // Function to handle the selection of an image
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NFT Generator</h1>
      </header>
      <main>
        {/* NFT Description Input Component */}
        <NFTDescriptionInput setNFTDescription={setNFTDescription} />

        {/* Check if an NFT description is available */}
        {nftDescription && (
          <div>
            {/* Image Selection Component */}
            <ImageSelection
              images={generatedImages}
              selectedImage={selectedImage}
              handleImageSelect={handleImageSelect}
            />
          </div>
        )}

        {/* Check if an image is selected */}
        {selectedImage && (
          <div>
            {/* Final NFT Component */}
            <FinalNFT selectedImage={selectedImage} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
