import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as userActions from "../store/actions/user";

const Home = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUser((previtems) => {
      return {
        ...previtems,
        [name]: value,
      };
    });
  };

  const addUser = () => {
    dispatch(userActions.addUser(user));
    setUser({
      id: "",
      name: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Add User</h1>
      <input
        name="id"
        placeholder="Enter a id"
        onChange={inputHandler}
        value={user.id}
      />
      <input
        name="name"
        placeholder="Enter username"
        onChange={inputHandler}
        value={user.name}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter password"
        onChange={inputHandler}
        value={user.password}
      />
      <button type="submit" onClick={addUser}>
        Add User
      </button>
      <br />
      <Link to="/user">Users List</Link>
    </div>
  );
};

export default Home;
