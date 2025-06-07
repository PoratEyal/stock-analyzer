import React, { useState } from 'react';
import styles from './SearchBar.module.css';

type SearchBarProps = {
  onSearch: (ticker: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [ticker, setTicker] = useState('');

  const handleSearch = () => {
    if (ticker.trim()) {
      onSearch(ticker.trim());
    }
  };

  return (
    <div className={styles['search-bar']}>
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter stock ticker"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
