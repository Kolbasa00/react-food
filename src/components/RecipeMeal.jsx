function RecipeMeal(props) {
  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
    recipe,
  } = props;

  return (
    <div>
      <img src={strMealThumb} alt={strMeal} />
      <h1 className="text-6xl mt-11 mb-6">{strMeal}</h1>
      <h6 className="mb-2">Category: {strCategory}</h6>
      <h6 className="mb-2">Area: {strArea}</h6>
      <p>{strInstructions}</p>

      <table className="w-full text-center">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-1">Ingredient</th>
            <th className="py-3 px-1">Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(recipe).map((key) => {
            if (key.includes("Ingredient") && recipe[key]) {
              return (
                <tr className="border-b border-gray-200" key={key}>
                  <td className="py-3 px-1">{recipe[key]}</td>
                  <td className="py-3 px-1">
                    {recipe[`strMeasure${key.slice(13)}`]}
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      {strYoutube ? (
        <div>
          <h5 className="mb-5 mt-6 text-2xl">Video Recipe</h5>
          <iframe
            className="w-[600px] h-[350px]"
            title={idMeal}
            src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
            allowfullscreen
          />
        </div>
      ) : null}
    </div>
  );
}

export default RecipeMeal;
