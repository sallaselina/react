import { Link } from "react-router-dom";
const Card = ({ name, likes, addLike, removeCard, removeLike }) => {
  return (
    <div className="card">
      <button onClick={removeCard}>
        <span className="material-symbols-outlined close">close</span>
      </button>
      <img
        src={`https://source.unsplash.com/400x400/?${name}`}
        alt="image of the animal"
      />
      <h2>{name}</h2>
      <h3>{likes} likes </h3>
      <button onClick={addLike}>
        <span className="material-symbols-outlined heart">
          {likes >= 0 ? "heart_plus" : "heart_broken"}
        </span>
      </button>
      <button onClick={removeLike}>
        <span className="material-symbols-outlined minus">heart_minus</span>
      </button>
      <Link to={name}> See more</Link>
    </div>
  );
};

export default Card;
