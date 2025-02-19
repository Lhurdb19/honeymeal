import { useState, useEffect } from "react";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const useMealCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch meal categories");
        }

        const result = await response.json();
        setCategories(result.categories); // Extracting the categories array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useMealCategories;
