import React, { useState } from "react";
import useFilteredMeals from "../../Lib/useFilteredMeal";
import "./Filteredmeal.css";

const FilteredMealsComponent = () => {
  const [ingredient, setIngredient] = useState("chicken_breast"); // Default ingredient
  const { data, isLoading, error } = useFilteredMeals(ingredient);

  const meals = data?.meals || [];

  return (
    <div>
      <div className="filtered-component">
        <h2>Filtered Meals</h2>

        <div className="ingredient">
          <label>Enter Ingredient:</label>
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="e.g., chicken_breast"
          />
        </div>

        {error && <p>Error: {error.message}</p>}

        <ul className="filtered-meal-wrapper">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <li key={index} className="filtered-meal-info skeleton">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-text"></div>
                </li>
              ))
            : meals.length > 0
            ? meals.map((meal) => (
                <li key={meal.idMeal} className="filtered-meal-info">
                  <img src={meal.strMealThumb} alt={meal.strMeal} width="150" />
                  <h3>{meal.strMeal}</h3>
                </li>
              ))
            : !isLoading && <p>No meals found.</p>}
        </ul>
      </div>
    </div>
  );
};

export default FilteredMealsComponent;
