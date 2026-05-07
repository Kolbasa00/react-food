import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getFilteredCategory } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilteredCategory = async () => {
      const data = await getFilteredCategory(name);
      setMeals(data.meals);
    };
    fetchFilteredCategory();
  }, [name]);

  return (
    <>
      <button
        className="bg-[#26a69a] uppercase hover:bg-[#2bbbad] hover:shadow-2xl text-white px-4 py-2 mb-2 cursor-pointer transition rounded-xs"
        onClick={() => navigate(-1)}
      >
        go back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export default Category;
