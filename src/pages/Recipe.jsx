import { getMealById } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Preloader from "../components/Preloader";
import RecipeMeal from "../components/RecipeMeal";
import { useNavigate } from "react-router";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGetMeal = async () => {
      const data = await getMealById(id);
      setRecipe(data.meals[0]);
    };

    fetchGetMeal();
  }, []);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <RecipeMeal {...recipe} recipe={recipe} />
      )}
      <button
        className="bg-[#26a69a] uppercase hover:bg-[#2bbbad] hover:shadow-2xl text-white px-4 py-2 mt-7 cursor-pointer transition rounded-xs"
        onClick={() => navigate(-1)}
      >
        go back
      </button>
    </>
  );
}

export default Recipe;
