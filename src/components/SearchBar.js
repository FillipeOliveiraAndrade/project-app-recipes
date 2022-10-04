import React, { useContext } from 'react';
import '../styles/Header.css';
import SearchBarContext from '../context/SearchBarContext';

function SearchBar() {
  const { searchValue, handleChangeSearch,
    handleChange, filterCategory, handleSearchButton } = useContext(SearchBarContext);

  return (
    <form>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search"
        value={ searchValue }
        onChange={ handleChangeSearch }
        className="search-input"
      />

      <div className="ingredients-container">
        <div className="ingredients">
          <label htmlFor="ingredient-search-radio">
            Ingredient
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              id="ingredientRadioButton"
              name="filtersCategory"
              onChange={ handleChange }
            />
          </label>

          <label htmlFor="name-search-radio">
            Name
            <input
              type="radio"
              data-testid="name-search-radio"
              id="nameRadioButton"
              name="filtersCategory"
              onChange={ handleChange }
            />
          </label>

          <label htmlFor="first-letter-search-radio">
            First Letter
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              id="firstLetterRadioButton"
              name="filtersCategory"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div className="buttonContainer">
          <button
            type="button"
            data-testid="exec-search-btn"
            onClick={ () => handleSearchButton(filterCategory) }
            className="button"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
