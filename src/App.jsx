import "./App.css";
import { animals, birds, fishes, insects } from "../animalsList";
import Root from "./Root.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import { useState } from "react";
import CategoryPage from "./routes/CategoryPage.jsx";
import SinglePage from "./routes/SinglePage.jsx";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });

  const removeCard = (name, category) => {
    setZoo((prevState) => ({
      ...prevState,
      [category]: prevState[category].filter(
        (element) => element.name !== name
      ),
    }));
  };
  //taking the data in from categorypage parameters

  const likesHandler = (name, category, action) => {
    setZoo((prevState) => ({
      ...prevState,
      [category]: prevState[category].map((element) =>
        element.name === name
          ? { ...element, likes: element.likes + (action === "add" ? 1 : -1) }
          : element
      ),
    }));
  };

  /* const removeCard = (item) => {
    const updatedArray = zoo.filter((item) => item.name !== item);
    setZoo(updatedArray);
  };

  const likesHandler = (item, action) => {
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
  }; */

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: ":category",
          element: (
            <CategoryPage
              addLike={likesHandler}
              removeLike={likesHandler}
              removeCard={removeCard}
              {...zoo}
            />
          ),
        },
        {
          path: ":category/:name",
          element: <SinglePage {...zoo} />,
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
