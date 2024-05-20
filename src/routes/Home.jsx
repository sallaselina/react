import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <div className="grid">
        <div className="split">
          <Link to="/animals">
            <img
              src="https://source.unsplash.com/400x400/?mammal"
              alt=" random image of a mammal"
            />
            <h2>Animals</h2>
          </Link>
        </div>
        <div className="split">
          <Link to="/birds">
            <img
              src="https://source.unsplash.com/400x400/?bird"
              alt="random image of a bird"
            />
            <h2>Birds</h2>
          </Link>
        </div>
        <div className="split">
          <Link to="/fishes">
            <img
              src="https://source.unsplash.com/400x400/?fish"
              alt="random image of fish"
            />
            <h2>Fish</h2>
          </Link>
        </div>
        <div className="split">
          <Link to="/insects">
            <img
              src="https://source.unsplash.com/400x400/?bug"
              alt="random image of a insect"
            />
            <h2>Insects</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
