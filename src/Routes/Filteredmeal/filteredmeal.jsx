import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useFilteredMeals from "../../Lib/useFilteredMeal";
import "./Filteredmeal.css";

const FilteredMealsComponent = () => {
  const [ingredient, setIngredient] = useState("chicken_breast"); // Default ingredient
  const [visibleMeals, setVisibleMeals] = useState(100)
  const { data, isLoading, error } = useFilteredMeals(ingredient);

  const meals = data?.meals || [];

  //Observer for infinite scroll
  const observer = useRef();
  const lasdtMealRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleMeals < meals.length) {
          setVisibleMeals((prev) => prev + 10);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, meals.length, visibleMeals]
  );

  useEffect(()=> {
    setVisibleMeals(10);
  },[ingredient])

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
            ? Array.from({ length: 100 }).map((_, index) => (
                <li key={index} className="filtered-meal-info skeleton">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-text"></div>
                </li>
              ))
            : meals.slice(0, visibleMeals).map((meal, index) => (
              <li key={meal.idMeal} className="filtered-meal-info"
              ref={index === visibleMeals - 1 ? lasdtMealRef : null}>
                <Link to={`/meal/${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} width="150" />
                </Link>
                <h3>{meal.strMeal}</h3>
              </li>
            ))}
        </ul>
        {!isLoading && meals.length === 0 && <p>No meals found.</p>}
      </div>
    </div>
  );
};

export default FilteredMealsComponent;
