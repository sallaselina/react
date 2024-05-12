import { birds } from "../../animalsList";
import { useState } from "react";
import Card from "../components/Card";

const Birds = () => {
  const [birdsData, setBirdsData] = useState(birds);
  const removeCard = (bird) => {
    const updatedArray = birdsData.filter((item) => item.name !== bird);
    setBirdsData(updatedArray);
  };

  const likesHandler = (bird, action) => {
    const updatedArray = birdsData.map((item) => {
      if (item.name === bird) {
        if (action === "add") {
          return { ...item, likes: item.likes + 1 }; // opening the property with the spread operator, accessing the likes property and overwriting it with the incremented value
        } else {
          return { ...item, likes: item.likes - 1 };
        }
      } else {
        return item;
      }
    });
    setBirdsData(updatedArray);
  };
  return (
    <div className="container">
      {birdsData.map((bird) => (
        <Card
          key={bird.name}
          {...bird}
          removeCard={() => removeCard(bird.name)}
          addLike={likesHandler.bind(this, bird.name, "add")}
          removeLike={() => likesHandler(bird.name, "remove")}
        />
      ))}
    </div>
  );
};
export default Birds;
