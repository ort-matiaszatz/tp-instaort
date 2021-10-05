import React from "react";
import {
  useLocation,
  useParams
} from "react-router-dom";


const Home = () => {
  const {busqueda} = useParams();
  return <div>Hello {busqueda}</div>;
};

export default Home;