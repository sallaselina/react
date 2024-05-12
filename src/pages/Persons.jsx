import Box from "../components/Box";
import { useState } from "react";

const Persons = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Salla", title: "Developer", location: "Vantaa" },
    { id: 2, name: "Yasmin", title: "Designer", location: "Helsinki" },
    { id: 3, name: "Jay", title: "Teacher", location: "Bangkok" },
  ]);
  return (
    <>
      persons page will be here.
      {persons.map((person) => (
        <Box
          key={person.id}
          name={person.name}
          title={person.title}
          location={person.location}
        />
      ))}
    </>
  );
};

export default Persons;
