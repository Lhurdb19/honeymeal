import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useMealDetails from "../../Lib/useMealDetails";
import { convertToRoman } from "../../utils";
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
    <div className="meal-details-component">
      <h2>{meal.strMeal}</h2>
      <div className="meal-wrap-container">
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <div className="meal-wrap-container-text">
      <p className="instruction">{meal.strInstructions}</p>
      {/* <div className="instruction">
  <h3>Steps to Make the Meal:</h3>
  <ol className="instruction-list">
    {meal.strInstructions
      ?.split(".")
      .filter(step => step.trim() !== "") // Remove empty steps
      .map((step, index) => (
        <li key={index}>
          <strong>{convertToRoman(index + 1)}.</strong> {step}.
        </li>
      ))}
  </ol>
</div> */}


      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <p><strong>Tags:</strong> {meal.strTags || "No tags"}</p>
      <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
      </div>
      
      </div>
    </div>
  );
};

export default MealDetails;
