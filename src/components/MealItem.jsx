import { Link } from "react-router";

function MealItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className="shadow-xl bg-[#fff] rounded-sm flex flex-col mb-4">
      <img src={strMealThumb} alt={strMeal} className="block rounded-sm" />
      <div className="p-6 grow">
        <h3 className="text-2xl font-light ">{strMeal}</h3>
      </div>
      <div className="border-t border-gray-200 py-6 px-6">
        <Link
          to={`/meal/${idMeal}`}
          className="bg-[#26a69a] uppercase hover:bg-[#2bbbad] hover:shadow-2xl text-white px-4 py-2 cursor-pointer transition rounded-xs"
        >
          watch recipe
        </Link>
      </div>
    </div>
  );
}

export default MealItem;
