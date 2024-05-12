import { animals } from "../../animalsList";
import { useState } from "react";
import Card from "../components/Card";

const Animals = () => {
  const [animalsData, setAnimalsData] = useState(animals);

  const removeCard = (animal) => {
    const updatedArray = animalsData.filter((item) => item.name !== animal);
    setAnimalsData(updatedArray);
  };

  const likesHandler = (animal, action) => {
    const updatedArray = animalsData.map((item) => {
      if (item.name === animal) {
        if (action === "add") {
          return { ...item, likes: item.likes + 1 }; // opening the property with the spread operator, accessing the likes property and overwriting it with the incremented value
        } else {
          return { ...item, likes: item.likes - 1 };
        }
      } else {
        return item;
      }
    });
    setAnimalsData(updatedArray);
  };
  return (
    <div className="container">
      {animalsData.map((animal) => (
        <Card
          key={animal.name}
          {...animal}
          removeCard={() => removeCard(animal.name)}
          addLike={likesHandler.bind(this, animal.name, "add")}
          removeLike={() => likesHandler(animal.name, "remove")}
        />
      ))}
    </div>
  );
};

export default Animals;
