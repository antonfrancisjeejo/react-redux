export const addUser = (user) => {
  return {
    type: "ADD_USER",
    user: user,
  };
};

export const removeUsers = () => {
  return {
    type: "REMOVE_USERS",
  };
};
