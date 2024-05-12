import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <div className="split">
        <Link to="/animals">
          <img
            src="https://source.unsplash.com/400x400/?mammal"
            alt="image of the animal"
          />
          <h2>Animals</h2>
        </Link>
      </div>
      <div className="split">
        <Link to="/birds">
          <img
            src="https://source.unsplash.com/400x400/?bird"
            alt="image of a bird"
          />
          <h2>Birds</h2>
        </Link>
      </div>
    </>
  );
};

export default Home;
