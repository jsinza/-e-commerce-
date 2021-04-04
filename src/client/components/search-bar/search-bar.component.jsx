/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import SearchIcon from '../../assets/ic_Search.png';
import MeliIcon from '../../assets/Logo_ML.png';

import './search-bar.styles.scss';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const history = useHistory();

  const hangleChange = ({ target: { value } }) => {
    setSearchText(value);
  };
  const handleSearch = (event) => {
    if (event.keyCode === 13 || event.type === 'click') {
      history.push(`/items?q=${searchText}`);
    }
  };
  return (
    <div className='search-bar'>
      <Link className='search-bar__icon search-bar__icon--logo' to='/'>
        <img src={MeliIcon} alt='meli-logo' />
      </Link>
      <div className='search-bar__container'>
        <input
          className='search-bar__search'
          placeholder='Buscar productos, marcas y más…'
          onChange={hangleChange}
          onKeyUp={handleSearch}
        />
        <span
          className='search-bar__icon search-bar__icon--search'
          onClick={handleSearch}
        >
          <img src={SearchIcon} height='15' width='15' alt='search-icon' />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
