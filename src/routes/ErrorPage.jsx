import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error">
      <h1>Something went wrong.</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
