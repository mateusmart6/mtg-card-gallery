import React, { useState } from 'react';
import Card from './Card'; // Import the Card component

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardList, setCardList] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    const response = await axios.get(`https://api.scryfall.com/cards/search?q=${searchTerm}&format=image`);
    const data = response.data.data; // Access the actual card data from the response
    setCardList(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Magic the Gathering Cards" />
        <button type="submit">Search</button>
      </form>
      <div className="card-list">
        {cardList.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default Search;