// DeployButton.js
import React from "react";

const DeployButton = ({ deployContract }) => {
  return (
    <div>
      <button onClick={deployContract}>Deploy NFT</button>
    </div>
  );
};

export default DeployButton;
