import React, { useContext, useEffect } from 'react';
import RecipesDetailsContext from '../context/RecipesDetailsContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/favAndShareIcons.css';

function ShareAndFavoriteButton() {
  const { handleShareButtonClick,
    handleFavoriteButtonClick,
    isLinkCopied,
    VerifyIfRecipesIsFavorite,
    blackHearth,
  } = useContext(RecipesDetailsContext);

  useEffect(() => {
    VerifyIfRecipesIsFavorite();
  }, []);

  return (
    <div className="favShareContainer">
      <input
        className="fav-share-Icons"
        type="image"
        src={ blackHearth ? blackHeartIcon : whiteHeartIcon }
        alt="Favorite icon"
        data-testid="favorite-btn"
        onClick={ handleFavoriteButtonClick }
      />

      {' '}

      <input
        type="image"
        src={ shareIcon }
        alt="Share icon"
        data-testid="share-btn"
        onClick={ handleShareButtonClick }
      />
      {isLinkCopied && <p>Link copied!</p>}
    </div>
  );
}

export default ShareAndFavoriteButton;
