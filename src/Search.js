import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'; // Import the Card component

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Use the fetched card data
  const [cardData, setCardData] = useState([]); // Use a more descriptive name
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      setCardData([]); // Clear card data if search term is empty or only whitespace
      return;
    }

    const formattedTerm = searchTerm; // No color filter applied

    try {
      const response = await axios.get(`https://api.scryfall.com/cards/search?q=${formattedTerm}&format=image`);
      if (response.status === 200) {
        const data = response.data.data;
        setCardData(data); // Update card data state
        setErrorMessage(null); // Clear any previous error message
      } else {
        // Handle potential non-404 errors here (optional)
        console.error('Unexpected API error:', response.statusText);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage('No results found for your search term.'); // Set error message for 404
      } else {
        // Handle other potential errors (optional)
        console.error('Error fetching cards:', error);
      }
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Clear search term after some delay (optional)
      setSearchTerm(''); // Set search term to empty string
    }, 500); // Adjust timeout delay as needed

    return () => clearTimeout(timeoutId); // Cleanup function for timeout
  }, []); // Runs only once on initial render

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> {/* Center the content vertically and horizontally */}
      <div>
        <h1>MGT Card Gallery</h1>
        <form onSubmit={handleSearch}>
          <div className="search-box"> {/* New container for styling */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Magic the Gathering Cards"
              style={{
                width: '400px', // Adjust width as desired
                height: '30px', // Adjust height as desired
                padding: '15px', // Adjust padding as needed
                border: '1px solid #ccc', // Gray border
                borderRadius: '5px', // Rounded corners
                fontSize: '16px',
                backgroundColor: 'transparent',
                color: '#fff', // White text color
              }}
            />
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {/* Conditionally render cards based on cardData */}
        {cardData.length > 0 && (
          <div className="card-list">
            {/* Display cards using the Card component */}
            {cardData.map((card) => (
              <Card key={card.id} cardData={card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;