import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAllCategories } from "../api";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase()),
      ),
    );

    navigate(`${pathname}?search=${str}`);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const allCategories = await getAllCategories();
      setCatalog(allCategories.categories);
      setFilteredCatalog(
        search
          ? allCategories.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase()),
            )
          : allCategories.categories,
      );
    };

    fetchCategories();
  }, [search]);

  return (
    <>
      <Search callback={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export default Home;
