import { UPDATE_USER } from "../actions/user-actions";

const userReducer = (state = "", { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
      break;

    default:
      break;
  }
  return state;
};
export default userReducer;
