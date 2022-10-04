import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/meals.css';

function RecipesCards({ thumb, name, index, route, itemId }) {
  const history = useHistory();

  const redirectToCardDetails = (routeParam, id) => {
    history.push(`/${routeParam}/${id}`);
  };

  return (
    <button
      type="button"
      onClick={ () => redirectToCardDetails(route, itemId) }
      className="recipeButton"
    >
      <div
        data-testid={ `${index}-recipe-card` }
        className="mealsCard"
      >
        <img
          width="100px"
          data-testid={ `${index}-card-img` }
          src={ thumb }
          alt={ name }
          className="mealsImage"
        />
        <h3
          data-testid={ `${index}-card-name` }
          className="recipeTitle"
        >
          { name }
        </h3>
      </div>
    </button>
  );
}

RecipesCards.propTypes = {
  thumb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default RecipesCards;
