const recipeFactory = (
  name,
  likes,
  description,
  timeToPrepare,
  servings,
  calories,
  imageUrl
) => {
  return {
    name,
    likes,
    description,
    timeToPrepare,
    servings,
    calories,
    imageUrl,
  };
};

const recipes = [
  recipeFactory(
    "Blissful Bagel Sandwich",
    64,
    "A holy sandwich.",
    20,
    2,
    800,
    "images/image1.jpg"
  ),
  recipeFactory(
    "Hopeful Hotdog Sandwich",
    10,
    "It really wants to be a sandwich. Please don't hurt its feelings.",
    10,
    1,
    1400,
    "images/image2.jpg"
  ),
  recipeFactory(
    "Outspoken Open Sandwich",
    27,
    "This sandwich is very honest. Do not try to eat it upside down.",
    5,
    0.5,
    160,
    "images/image3.jpg"
  ),
  recipeFactory(
    "Better Burger Sandwich",
    102,
    "It's not the best, but it's better",
    40,
    1,
    2000,
    "images/image4.jpg"
  ),
  recipeFactory(
    "Potential Pita Sandwich",
    0,
    "This could potentially be a sandwich, if you choose to make it.",
    35,
    1,
    1500,
    "images/image5.jpg"
  ),
  recipeFactory(
    "Relatable Wrap Sandwich",
    44,
    "This sandwich has imposter syndrome.",
    30,
    2,
    1350,
    "images/image6.jpg"
  ),
];
