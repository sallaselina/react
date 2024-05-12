const Dashboard = ({ user }) => {
  // if (user === "Salla")
  return (
    <div>
      {user === "Salla" ? (
        <h2>Welcome to the application, {user}</h2>
      ) : (
        <h2>You must be new here, {user}</h2>
      )}
    </div>
  );
};

export default Dashboard;
