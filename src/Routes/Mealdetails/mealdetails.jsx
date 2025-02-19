import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useMealDetails from "../../Lib/useMealDetails";
import "./Mealdetails.css";

const MealDetails = () => {
  const { id } = useParams();
  const { meal, loading } = useMealDetails(id);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || showSkeleton) {
    return <div className="skeleton-loader"></div>;
  }

  if (!meal) return <p>Meal not found.</p>;

  return (
    <div className="meal-details">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <p><strong>Tags:</strong> {meal.strTags || "No tags"}</p>
      <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
};

export default MealDetails;
