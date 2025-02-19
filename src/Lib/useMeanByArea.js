import { useQuery } from "react-query";

const fetchMealsByArea = async (area) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch meals for area: ${area}`);
  }
  return response.json();
};

const useMealsByArea = (area) => {
  return useQuery({
    queryKey: ["mealsByArea", area],
    queryFn: () => fetchMealsByArea(area),
    enabled: !!area, // Ensures query runs only when area is provided
  });
};

export default useMealsByArea;
