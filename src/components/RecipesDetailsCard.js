import React, { useContext } from 'react';
import RecipesDetailsContext from '../context/RecipesDetailsContext';
import ShareAndFavoriteButton from './ShareAndFavoriteButton';
import '../styles/RecipesDetailsButton.css';

function RecipesDetailsCard() {
  const { dataRecipesDetails } = useContext(RecipesDetailsContext);

  return (
    <div>
      {dataRecipesDetails.map((item) => {
        const ingredientsArr = Object.entries(item)
          .filter((key) => key[0]
            .includes('strIngredient') && key[1] !== '' && key[1] !== null);

        const measureArr = Object.entries(item)
          .filter((key) => key[0]
            .includes('strMeasure') && key[1] !== ' '
              && key[1] !== null
              && key[1] !== '');

        let videoUrl;
        if (item.strVideo !== null) {
          videoUrl = item.strYoutube.replace('https://www.youtube.com/watch?v=', '');
        }

        return (
          <div
            key={ item.idDrink || item.idMeal }
            className="recipeDetailPage"
          >
            <div className="RecipeDetailHeader">
              <img
                src={ (item.strMealThumb || item.strDrinkThumb) }
                className="receipeDetailImage"
                alt="Recipe"
                data-testid="recipe-photo"
              />
              <h3
                data-testid="recipe-title"
                className="recipeDetailTitle"
              >
                {item.strMeal || item.strDrink}
              </h3>
            </div>
            <div className="detailsBody">
              <ShareAndFavoriteButton />

              <h5 data-testid="recipe-category">
                { item.idDrink ? (item.strCategory && item.strAlcoholic)
                  : item.strCategory}
              </h5>
              <ul>
                {
                  ingredientsArr.map((ingredient, index) => (
                    <li
                      key={ index }
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      { (measureArr[index] !== undefined)
                        ? `${measureArr[index][1]} - ${ingredient[1]}` : ingredient[1] }
                    </li>
                  ))
                }
              </ul>
              <br />
              <p data-testid="instructions">
                { item.strInstructions }
              </p>
              <br />
              {item.strMeal && (<iframe
                src={ `https://www.youtube.com/embed/${videoUrl}` }
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                data-testid="video"
              />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipesDetailsCard;
