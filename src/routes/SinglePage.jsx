import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SinglePage = ({ ...rest }) => {
  const params = useParams();
  const categoryItems = rest[params.category];
  const data = categoryItems.find((element) => element.name === params.name);
  const [text, setText] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${data.name}`)
      .then((res) => {
        setText(res.data);
      })
      .catch((error) => console.error("Error:", error));
  }, [data.name]);

  return (
    <>
      <h2>{data.name.toUpperCase()}</h2>
      <img src={`https://source.unsplash.com/400x400/?${data.name}`}></img>
      <h3> Information </h3>
      <p className="content">{text.extract}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default SinglePage;
