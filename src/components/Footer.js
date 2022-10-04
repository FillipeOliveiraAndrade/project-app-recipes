import React from 'react';
import { useHistory } from 'react-router-dom';
import DrinkIcon from '../images/drinkIcon.svg';
import MealIcon from '../images/mealIcon.svg';
import whiteLogo from '../images/Bon APPétit name LOGO Branco.png';
import '../styles/Footer.css';

function Footer() {
  const history = useHistory();

  const redirectTo = (pathName) => {
    history.push(pathName);
  };

  return (
    <footer className="footer-container" data-testid="footer">
      <input
        type="image"
        onClick={ () => redirectTo('/drinks') }
        src={ DrinkIcon }
        alt="drinks screen"
        data-testid="drinks-bottom-btn"
        className="icons"
      />
      <img
        src={ whiteLogo }
        alt="bon appétit logo"
        className="footerLogo"
      />
      <input
        type="image"
        onClick={ () => redirectTo('/meals') }
        src={ MealIcon }
        alt="meals screen"
        data-testid="meals-bottom-btn"
        className="icons"
      />
    </footer>
  );
}

export default Footer;
