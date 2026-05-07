import { Link } from "react-router";

function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <div className="shadow-xl bg-[#fff] rounded-sm flex flex-col mb-4">
      <img
        src={strCategoryThumb}
        alt={strCategory}
        className="block rounded-sm"
      />
      <div className="p-6 grow">
        <h3 className="text-2xl font-light mb-2 ">{strCategory}</h3>
        <p className="line-clamp-2">{strCategoryDescription}</p>
      </div>
      <div className="border-t border-gray-200 py-6 px-6">
        <Link
          to={`/category/${strCategory}`}
          className="bg-[#26a69a] uppercase hover:bg-[#2bbbad] hover:shadow-2xl text-white px-4 py-2 cursor-pointer transition rounded-xs"
        >
          watch category
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
