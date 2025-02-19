import { useQuery } from "react-query";

const fetchMealsByCategory = async (category) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch meals for category: ${category}`);
  }
  return response.json();
};

const useMealsByCategory = (category) => {
  return useQuery({
    queryKey: ["mealsByCategory", category],
    queryFn: () => fetchMealsByCategory(category),
    enabled: !!category, // Ensures query runs only when category is provided
  });
};

export default useMealsByCategory;
