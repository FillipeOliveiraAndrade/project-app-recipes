import React, { useContext, useEffect, useState } from 'react';
import SearchBarContext from '../context/SearchBarContext';
import createMenu from '../utils/createMenu';
import {
  MEALS_CATEGORYS_END_POINT,
  MEALS_RECIPES_END_POINT,
  MIN_CATEGORY_LENGTH,
} from '../utils/globalVariables';
import { getRecipes, getRecipesFromCategory } from '../utils/recipesFetch';
import '../styles/meals.css';

function Meals() {
  const { recipes, setRecipes } = useContext(SearchBarContext);
  const [mealsCategorys, setMealsCategorys] = useState([]);
  const [foodsCategory, setFoodsCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    const mealsRecepiesFetch = async () => {
      const response = await getRecipes(MEALS_RECIPES_END_POINT);
      setRecipes(response);
    };

    const mealsCategoryFetch = async () => {
      const response = await getRecipes(MEALS_CATEGORYS_END_POINT);
      setMealsCategorys(response);
    };

    mealsRecepiesFetch();
    mealsCategoryFetch();
  }, []);

  const foodsFromCategory = async ({ target: { value } }) => {
    if (currentCategory === value) {
      setFoodsCategory([]);
      setCurrentCategory('');
      return;
    }
    const response = await getRecipesFromCategory(value, 'meals');
    setFoodsCategory(response);
    setCurrentCategory(value);
  };

  const clearFilters = () => {
    setFoodsCategory([]);
  };

  return (
    <main>
      <section>
        <div>
          {mealsCategorys.slice(0, MIN_CATEGORY_LENGTH).map(({ strCategory }) => (
            <input
              type="button"
              key={ strCategory }
              value={ strCategory }
              id={ strCategory }
              onClick={ foodsFromCategory }
              name="categories"
              data-testid={ `${strCategory}-category-filter` }
            />
          ))}
          <input
            type="button"
            data-testid="All-category-filter"
            onClick={ clearFilters }
            value="All"
          />
        </div>
      </section>
      <section className="mealsRecipesContainer">
        {
          foodsCategory.length === 0
            ? createMenu(recipes, 'meals')
            : createMenu(foodsCategory, 'meals')
        }
      </section>
    </main>
  );
}

export default Meals;
