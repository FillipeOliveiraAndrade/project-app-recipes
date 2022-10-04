import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  const history = useHistory();
  const { location: { pathname } } = history;

  const [searchInput, setSearchInput] = useState(false);
  const [title, setTitle] = useState('');
  const [iconSearch, setIconSearch] = useState(true);

  const checkTitle = () => {
    switch (pathname) {
    case '/meals':
      setTitle('Meals');
      setIconSearch(true);
      break;

    case '/drinks':
      setTitle('Drinks');
      setIconSearch(true);
      break;

    case '/profile':
      setTitle('Profile');
      setIconSearch(false);
      break;

    case '/done-recipes':
      setTitle('Done Recipes');
      setIconSearch(false);
      break;

    case '/favorite-recipes':
      setTitle('Favorite Recipes');
      setIconSearch(false);
      break;

    default: history.push('/notFound');
    }
  };

  useEffect(() => {
    checkTitle();
  });

  return (
    <>
      <div className="header-container">
        <input
          type="image"
          src={ profileIcon }
          alt="Profile icon"
          className="icons"
          data-testid="profile-top-btn"
          onClick={ () => {
            history.push('/profile');
          } }
        />

        <h1 className="title" data-testid="page-title">
          {title}
        </h1>

        {iconSearch && (
          <input
            type="image"
            src={ searchIcon }
            alt="Search icon"
            data-testid="search-top-btn"
            onClick={ () => setSearchInput((prevState) => !prevState) }
            className="icons"
          />
        )}
      </div>

      <div className="SearchBar-container">
        {searchInput && <SearchBar />}
      </div>
    </>
  );
}

export default Header;
