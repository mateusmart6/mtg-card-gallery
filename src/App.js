import React from 'react';
import Search from './Search';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    // Add CSP headers dynamically
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      connect-src
        api.scryfall.com
        embed.scryfall.com;
      img-src
        *.scryfall.io
      style-src
        embed.scryfall.com;
      script-src
        embed.scryfall.com;
      font-src
        embed.scryfall.com;
    `;
    document.head.appendChild(meta);
  }

  render() {
    return (
      <div className="App">
        {/* Your app content goes here */}
      </div>
    );
  }
}

export default App;