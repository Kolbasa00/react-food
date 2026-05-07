import CategoryItem from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {catalog.map((el) => {
        return <CategoryItem key={el.idCategory} {...el} />;
      })}
    </div>
  );
}

export default CategoryList;
