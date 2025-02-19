import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMealsByArea from "../../Lib/useMeanByArea";
import "./Mealbyarea.css";

const MealsByAreaComponent = () => {
  const [area, setArea] = useState("Canadian"); // Default area
  const { data, isLoading, error } = useMealsByArea(area);

  const meals = data?.meals || [];

  return (
    <div className="areameal-component">
      <h2>Meals by Area</h2>

      <div className="select-area-container">
        <label>Select Area:</label>
        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="Canadian">Canadian</option>
          <option value="American">American</option>
          <option value="British">British</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>

      {error && <p>Error: {error.message}</p>}

      <ul className="areameal-wrapper">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <li key={index} className="areameal-info skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-text"></div>
              </li>
            ))
          : meals.length > 0
          ? meals.map((meal) => (
              <li key={meal.idMeal} className="areameal-info">
                <Link to={`/meal/${meal.idMeal}`}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                </Link>
                <h3>{meal.strMeal}</h3>
              </li>
            ))
          : !isLoading && <p>No meals found.</p>}
      </ul>
    </div>
  );
};

export default MealsByAreaComponent;
