import MealItem from "./MealItem";

function MealList({ meals = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {meals.map((el) => {
        return <MealItem key={el.idMeal} {...el} />;
      })}
    </div>
  );
}

export default MealList;
