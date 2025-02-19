import { useQuery } from "react-query";

const fetchMealsByIngredient = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch meals with ingredient: ${ingredient}`);
  }
  return response.json();
};

const useFilteredMeals = (ingredient) => {
  return useQuery({
    queryKey: ["filteredMeals", ingredient],
    queryFn: () => fetchMealsByIngredient(ingredient),
    enabled: !!ingredient, // Ensures the query runs only when ingredient is provided
  });
};

export default useFilteredMeals;
