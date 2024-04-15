// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { animals } from "../animalsList";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          {animals.map((animal) => (
            <Card key={animal.name} {...animal} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
