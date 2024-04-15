import animal_image from "/src/assets/animal_image.jpg";

const Card = ({ name, likes }) => {
  return (
    <div className="card">
      <span className="material-symbols-outlined close">close</span>
      <img src={animal_image} alt="image of the animal"></img>
      <h2>{name}</h2>
      <span className="material-symbols-outlined heart">favorite</span>
      <h3>{likes}</h3>
      <span className="material-symbols-outlined minus">heart_minus</span>
    </div>
  );
};

export default Card;
