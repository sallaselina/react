import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryPage = ({ removeCard, removeLike, addLike, ...rest }) => {
  const { category } = useParams();
  const categoryItems = rest[category];
  return (
    <>
      <h2>{category}</h2>
      <div className="container">
        {categoryItems.map((item) => (
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
