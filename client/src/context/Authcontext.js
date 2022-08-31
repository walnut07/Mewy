import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../service/firebase";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isPostSuccess, setIsPostSuccess] = useState();
  const value = {
    user,
    isPostSuccess,
    setIsPostSuccess
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}