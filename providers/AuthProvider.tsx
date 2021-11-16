import type { User } from "firebase/auth";

import { getAuth } from "firebase/auth";
import React, { useState, useEffect, useContext, createContext } from "react";
import "../firebase/fbClient";

interface IAuthContext {
  currentUser: User | null | undefined;
}

const AuthContext = createContext<IAuthContext>({
  currentUser: undefined,
});

export const useAuth = (): IAuthContext => {
  return useContext(AuthContext);
};

// eslint-disable-next-line
export default function AuthProvider({ children }: any): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);

  // Update the currentUser when the ID token is changed.
  useEffect(() => {
    return getAuth().onIdTokenChanged(async (user: User | null) => {
      setCurrentUser(user);
    });
  }, []);

  // Force refresh the token every 10 minutes.
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = getAuth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
}
