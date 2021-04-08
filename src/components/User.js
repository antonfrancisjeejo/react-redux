import React from "react";

const User = ({ name, id, password }) => {
  return (
    <ul>
      <li>
        <p>{id}</p>
        <h3>{name}</h3>
        <p>{password}</p>
      </li>
      <hr />
    </ul>
  );
};

export default User;
