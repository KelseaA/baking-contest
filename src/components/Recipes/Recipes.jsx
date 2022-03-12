import { recipeList } from "./recipeList";
import Card from "../Card/Card";

import "./Recipes.scss";

const Recipes = () => {
  return (
    <section className="Recipes">
      <h3>Recipes</h3>
      <div className="Recipes__content">
        <p>
          Nothing wrong with some good box mix from the store (hello, yellow
          cake) but if you'd like to stretch your baking muscles, check out
          these from-scratch recipes!
        </p>
        <div className="Recipes__list">
          {recipeList.map((recipe, index) => {
            return <Card card={recipe} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
