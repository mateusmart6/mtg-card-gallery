import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EarthImagery = () => {
  const [latestImage, setLatestImage] = useState(null);

  useEffect(() => {
    const fetchEarthImagery = async () => {
      try {
        const API_KEY = 'vLI6xWahi192He3TnUyUvO2dmkYRyMRDIeJ3oLqE'; // Replace with your NASA API key
        const response = await axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=-149.99078798245626&lat=61.21887894558012&api_key=${API_KEY}`);
        console.log(response.data); // Log response data to inspect its structure
        setLatestImage(response.data.date);
      } catch (error) {
        console.error('Error fetching Earth imagery:', error);
      }
    };

    fetchEarthImagery();
    const intervalId = setInterval(fetchEarthImagery, 10000); // Fetch imagery every 10 seconds

    return () => clearInterval(intervalId); // Clean up setInterval
  }, []);

  return (
    <div>
      <h2>Latest Earth Imagery</h2>
      {latestImage && (
        <div>
          <p>Latest Image: {latestImage}</p>
          {/* Additional rendering logic for the image can be added here */}
        </div>
      )}
    </div>
  );
};

export default EarthImagery;