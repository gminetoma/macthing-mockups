(() => {
  window.addEventListener("load", (event) => {
    const recipesElement = document.querySelector(".recipes");
    for (const recipe of recipes) {
      const card = `
        <div class="card quattrocento-regular">
          <img
            src="${recipe.imageUrl}"
            alt="Sandwich image"
            class="card__image"
          />
          <div class="card__info">
            <h2 class="card__h2 oswald-regular">${recipe.name}</h2>
            <p class="card__likes">${recipe.likes} people like this sandwich</p>
            <p class="card__description">${recipe.description}</p>
            <div class="card__details">
              <span class="card__details__detail"
                ><img
                  src="images/star.svg"
                  alt="Star image"
                  class="card__details__star"
                />${recipe.timeToPrepare} min</span
              ><span class="card__details__detail"
                ><img
                  src="images/star.svg"
                  alt="Star image"
                  class="card__details__star"
                />${recipe.servings} serving(s)</span
              ><span class="card__details__detail"
                ><img
                  src="images/star.svg"
                  alt="Star image"
                  class="card__details__star"
                />${recipe.calories} cal</span
              >
            </div>
            <div class="card__buttons">
              <button class="card__button roboto-regular">
                <img
                  src="images/heart.svg"
                  alt="Like image"
                  class="card__button__image"
                />Like
              </button>
              <button class="card__button roboto-regular">
                <img
                  src="images/share.svg"
                  alt="Share image"
                  class="card__button__image"
                />Share
              </button>
            </div>
          </div>
        </div>
        `;
      recipesElement.innerHTML += card;
    }
  });
})();
