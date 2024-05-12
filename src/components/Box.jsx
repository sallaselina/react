const Box = (props) => {
  return (
    <div>
      <h2>Name: {props.name} </h2>
      <p> Title: {props.title}</p>
      <p>Location: {props.location} </p>
    </div>
  );
};

export default Box;
