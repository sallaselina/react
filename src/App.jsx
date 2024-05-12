import "./App.css";
// import Box from "./Box.jsx";
//import Header from "./components/Header.jsx";
//import Footer from "./components/Footer.jsx";
// import Counter from "./Counter.jsx";
// import Form from "./Form.jsx";
// import View from "./View.jsx";
// import { useState } from "react";
//import Dashboard from "./pages/Dashboard.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Root from "./Root.jsx";
import Persons from "./pages/Persons.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {
  /*   const [inputValue, setInputValue] = useState("");


  /*  const changeHandler = (event) => {
    setInputValue(event.target.value);
  }; */
  /*
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const displayHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  }; */

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/about", element: <About /> },
        { path: "/", element: <Home /> },
        { path: "/persons", element: <Persons /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
{
  /*
      <button onClick={displayHandler}>Click me!</button>
      {isLoggedIn && <Dashboard user="Salla" />} */
}
{
  /* <Form changeFormHandler={changeFormHandler} />
      <View {...formData} /> */
}

export default App;
