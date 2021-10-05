import React from "react";
import { useParams } from 'react-router-dom'

const Usuario = () => {
  let { user } = useParams();
  return <div>Usuario: {user}</div>;
};

export default Usuario;