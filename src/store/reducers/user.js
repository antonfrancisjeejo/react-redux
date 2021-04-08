const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "REMOVE_USERS":
      return {
        users: [],
      };
    default:
      return state;
  }
};

export default usersReducer;
