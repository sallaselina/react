import { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeFormHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    console.log(formData);
  };
  return (
    <form>
      <h2>Form</h2>
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        id="firstName"
        onChange={props.changeFormHandler}
        name="firstName"
      ></input>{" "}
      <br></br>
      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        id="lastName"
        onChange={props.changeFormHandler}
        name="lastName"
      ></input>
      <br></br>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={props.changeFormHandler}
        name="email"
      ></input>
      <br></br>
      <label htmlFor="phone">Phone number</label>
      <input
        type="text"
        id="phone"
        onChange={props.changeFormHandler}
        name="phone"
      ></input>
      <br></br>
    </form>
  );
};

export default Form;
