import axios from "axios";
// import { publicRequest } from "../requestMethods";


export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

// export const logout = async () => {
//   try {
//     const res = await publicRequest.post("/auth/logout");
//     return res.data;
//   } catch (error) {
//     console.error('Error logging out:', error);
//   }
// };
export const logoutCall = (dispatch) => {
  // Add your logout logic here
  // This can include clearing session data, updating user status, etc.
  // For the sake of this example, let's assume we simply dispatch the logout action.
  dispatch({ type: "LOGOUT" });
}; 