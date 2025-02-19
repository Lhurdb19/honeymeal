import { useQuery } from "react-query";

const fetchData = async (type) => {
  const url = `https://www.themealdb.com/api/json/v1/1/list.php?${type}=list`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${type}`);
  }
  return response.json();
};

const useMealLists = () => {
  const { data: categoriesData, isLoading: loadingCategories, error: errorCategories } = useQuery({
    queryKey: ["mealCategories"],
    queryFn: () => fetchData("c"),
  });

  const { data: areasData, isLoading: loadingAreas, error: errorAreas } = useQuery({
    queryKey: ["mealAreas"],
    queryFn: () => fetchData("a"),
  });

  const { data: ingredientsData, isLoading: loadingIngredients, error: errorIngredients } = useQuery({
    queryKey: ["mealIngredients"],
    queryFn: () => fetchData("i"),
  });

  return {
    categories: categoriesData?.meals || [],
    areas: areasData?.meals || [],
    ingredients: ingredientsData?.meals || [],
    loading: loadingCategories || loadingAreas || loadingIngredients,
    error: errorCategories || errorAreas || errorIngredients,
  };
};

export default useMealLists;
