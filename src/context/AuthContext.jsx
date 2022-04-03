import { useContext, useReducer, useEffect, createContext } from "react";
import { authReducer, authInitialState } from "../reducer";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  const checkUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    authDispatch({ type: "CHECK_USER", payload: { user: user, token: token } });
  };
  useEffect(() => checkUser(), []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
