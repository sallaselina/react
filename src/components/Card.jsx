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
      <h3>
        {likes} likes
        <span className="material-symbols-outlined favorite">
          {likes >= 0 ? "favorite" : "heart_broken"}
        </span>
      </h3>
      <button onClick={addLike}>
        <span className="material-symbols-outlined heart_plus">heart_plus</span>
      </button>
      <button onClick={removeLike}>
        <span className="material-symbols-outlined minus">heart_minus</span>
      </button>
      <br></br>
      <Link to={name}> See more</Link>
    </div>
  );
};

export default Card;
