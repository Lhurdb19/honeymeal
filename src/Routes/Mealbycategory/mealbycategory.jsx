import React, { useState, useEffect, useRef, useCallback } from "react";
import useMealsByCategory from "../../Lib/useMealByCategory";
import "./Mealbycategory.css";

const MealsByCategoryComponent = () => {
  const [category, setCategory] = useState("Seafood"); // Default category
  const [visibleMeals, setVisibleMeals] = useState(10);
  const { data, isLoading, error } = useMealsByCategory(category);
  const meals = data?.meals || [];

  // Observer for infinite scroll
  const observer = useRef();
  const lastMealRef = useCallback(
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

  useEffect(() => {
    setVisibleMeals(10); // Reset pagination when category changes
  }, [category]);

  return (
    <div className="mealby-component">
      <h2>Meals by Category</h2>

      <div className="select-category-container">
        <label>Select Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Seafood">Seafood</option>
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
      </div>

      {error && <p>Error: {error.message}</p>}

      <ul className="mealby-wrapper">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <li key={index} className="mealby-info skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-text"></div>
              </li>
            ))
          : meals.slice(0, visibleMeals).map((meal, index) => (
              <li
                key={meal.idMeal}
                className="mealby-info"
                ref={index === visibleMeals - 1 ? lastMealRef : null}
              >
                <img src={meal.strMealThumb} alt={meal.strMeal} width="150" />
                <h3>{meal.strMeal}</h3>
              </li>
            ))}
      </ul>

      {!isLoading && meals.length === 0 && <p>No meals found.</p>}
    </div>
  );
};

export default MealsByCategoryComponent;
 