import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const CategoryPage = ({ removeCard, removeLike, addLike, ...rest }) => {
  const { category } = useParams();
  const categoryItems = rest[category];
  const location = useLocation();
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearch("");
  }, [location]);

  return (
    <>
      <h2>{category.toUpperCase()}</h2>
      <input
        type="text"
        placeholder="Search for an animal"
        onChange={searchHandler}
        value={search}
      ></input>
      <div className="container">
        {categoryItems
          .filter((element) =>
            element.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.name}
              name={item.name}
              likes={item.likes}
              removeCard={() => removeCard(item.name, category)}
              addLike={() => addLike(item.name, category, "add")}
              removeLike={() => removeLike(item.name, category, "remove")}
              // anonymous functions send the data to app
            />
          ))}
      </div>
    </>
  );
};

export default CategoryPage;
