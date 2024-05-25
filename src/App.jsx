import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./routes/Users.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Persons from "./routes/Persons.jsx";
import Posts from "./routes/Posts.jsx";
import Root from "./routes/Root.jsx";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Margit", title: "CEO", age: 29, location: "Helsinki" },
    { id: 2, name: "Kati", title: "developer", age: 25, location: "NY" },
    { id: 3, name: "Karin", title: "designer", age: 45, location: "Tartu" },
  ]);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const togglePublish = (id, published) => {
    const findPost = posts.find((post) => post.id === id);
    const updatedStatus = { ...findPost, published: !published };
    axios.put(`http://localhost:3001/posts/${id}`, updatedStatus).then(() => {
      setPosts(
        posts.map((post) =>
          post.id === id ? { ...post, published: !published } : post
        )
      );
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/users", element: <Users users={users} /> },
        { path: "/persons", element: <Persons persons={persons} /> },
        {
          path: "/posts",
          element: <Posts posts={posts} togglePublish={togglePublish} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
