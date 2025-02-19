import React from "react";
import useMealLists from "../../Lib/useMealList";
import "./Meallist.css";
import mealSample from "../../Assets/meal.mp4";

const MealListsComponent = () => {
  const { categories, areas, ingredients, loading, error } = useMealLists();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
    <div className="video-view">
      <video width="300" autoPlay loop muted className="meal-video">
        <source src={mealSample} type="video/mp4" />
      </video>
      <div className="meal-text">
        <h1>Welcome To Honey meal The Steakhouse</h1>
      <h2>Meal Lists</h2>
    </div>

      </div>
    <div className="meallist-component">

      <div className="category-con">
      <h3>Categories</h3>
      <ul>
        {categories.slice(0, 20).map((category, index) => (
          <li key={index}>{category.strCategory}</li>
        ))}
      </ul>
        </div>

        <div className="area-con">
      <h3>Areas</h3>
      <ul>
        {areas.slice(0, 20).map((area, index) => (
          <li key={index}>{area.strArea}</li>
        ))}
      </ul>
        </div>

        <div className="ingredient-con">
      <h3>Ingredients</h3>
      <ul>
        {ingredients.slice(0, 20).map((ingredient, index) => ( // Limit to 10 for readability
          <li key={index}>{ingredient.strIngredient}</li>
        ))}
      </ul>
        </div>
        <div className="options-container">
          <h1>Options For Everyone</h1>
          <div className="appetizer-con">
            <div className="appet-text">
              <h1>Appetizers</h1>
              <p>Start your dining experience with our delectable appetizers, crafted to excite your palate. From fresh seafood options to classic steakhouse favorites, our appetizers are the perfect introduction to a memorable meal.</p>
            </div>
            <img src="https://i.ibb.co/NnWmy7b0/appetizer.jpg" alt="" />
          </div>

          <div className="dessert-con">
            <div className="desse-text">
            <h1>Desserts</h1>
            <p>End your meal on a sweet note with our indulgent desserts. Our selection of house-made treats offers something for every sweet tooth, providing the perfect finish to your dining experience at Nationmeal The Steakhouse.</p>
            </div>
            <img src="https://i.ibb.co/Gfnx5sr5/Dessert.webp" alt="" />
          </div>

          <div className="entree-con">
            <div className="ent-text">
              <h1>Entree’s</h1>
              <p>Savor our expertly prepared entrées, featuring prime cuts of meat, fresh seafood, and seasonal ingredients. Each dish is designed to deliver a burst of flavor and satisfaction, making every bite a culinary delight</p>
            </div>
            <img src="https://i.ibb.co/bgcvY3Tt/entree.webp" alt="" />
          </div>
        </div>
    </div>
    </>
  );
};

export default MealListsComponent;
