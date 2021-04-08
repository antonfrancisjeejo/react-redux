import React from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import { useHistory } from "react-router-dom";
import { removeUsers } from "../store/actions/user";

const Users = () => {
  const users = useSelector((state) => {
    return state.users;
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handler = () => {
    history.goBack();
  };

  const clearUsers = () => {
    dispatch(removeUsers());
  };
  return (
    <div>
      {users.length !== 0 ? (
        users.map((user, index) => {
          return (
            <User
              key={index}
              name={user.name}
              id={user.id}
              password={user.password}
            />
          );
        })
      ) : (
        <h3>No user found</h3>
      )}
      <button onClick={handler}>Go Back</button>
      <button onClick={clearUsers}>Clear List</button>
    </div>
  );
};

export default Users;
