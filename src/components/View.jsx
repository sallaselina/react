const View = (props) => {
  return (
    <div>
      <h2>View</h2>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Email: {props.email}</p>
      <p>Phone number: {props.phone}</p>
    </div>
  );
};

export default View;
