import React from "react";
import { Link } from "react-router-dom";
import useMealLists from "../../Lib/useMealList";
import "./Meallist.css";
import mealSample from "../../Assets/meal.mp4";

const MealListsComponent = () => {
  const { categories, areas, ingredients, meals, loading, error } = useMealLists();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="video-view">
        <video width="300" autoPlay loop muted className="meal-video">
          <source src={mealSample} type="video/mp4" />
        </video>
        <div className="meal-text">
          <h1>Welcome To Honey Meal The Steakhouse</h1>
          <h2>Meal Lists</h2>
        </div>
      </div>

      <div className="meallist-component">
        <div className="meals-container">
          <ul>
            {meals?.slice(0, 20).map((meal) => (
              <li key={meal.idMeal} className="meal-item">
                <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                <Link to={`/meal/${meal.idMeal}`} className="meal-link">
                  {meal.strMeal}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="category-con">
          <h3>Categories</h3>
          <ul>
            {categories?.slice(0, 20).map((category, index) => (
              <li key={index}>{category.strCategory}</li>
            ))}
          </ul>
        </div>

        <div className="area-con">
          <h3>Areas</h3>
          <ul>
            {areas?.slice(0, 20).map((area, index) => (
              <li key={index}>{area.strArea}</li>
            ))}
          </ul>
        </div>

        <div className="ingredient-con">
          <h3>Ingredients</h3>
          <ul>
            {ingredients?.slice(0, 20).map((ingredient, index) => (
              <li key={index}>{ingredient.strIngredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MealListsComponent;
