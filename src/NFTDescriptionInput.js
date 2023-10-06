// components/NFTDescriptionInput.js

import React, { useState } from 'react';
import axios from 'axios';

const NFTDescriptionInput = ({ setNFTDescription }) => {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleGenerateDescription = async () => {
    try {
      const apiUrl = 'https://api-peach-one.vercel.app/description/generate-description'; // Use the API route path

      const response = await axios.post( 
        apiUrl,
        {
          description,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const generatedDescription = response.data.content;

      setNFTDescription(generatedDescription);
    } catch (error) {
      console.error('Error generating NFT description:', error);
    }
  };

  return (
    <div>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Describe your NFT idea..."
      />
      <button onClick={handleGenerateDescription}>Generate Description</button>
    </div>
  );
};

export default NFTDescriptionInput;
