"use client";

// Import necessary dependencies
import React, { ReactNode, createContext, useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User as FirebaseUser,
  signOut,
  UserCredential,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";

interface User {
  uid: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const route = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser: FirebaseUser | null) => {
        try {
          if (firebaseUser) {
            // User is signed in.
            const { uid, email } = firebaseUser;
            setUser({ uid, email } as User);
          } else {
            // User is signed out.
            setUser(null);
          }
        } finally {
        }
      }
    );

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const login: AuthContextType["login"] = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password).then(
      (UserCrendials) => {
        alert("User Login Success");
        route.push("/");
      }
    );
  };

  const signup: AuthContextType["signup"] = async (
    username,
    email,
    password
  ) => {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (UserCredentials: UserCredential) => {
        const user = UserCredentials.user;

        const userDocRef = doc(db, "users", `${user.uid}`);

        setDoc(
          userDocRef,
          {
            username: username,
            email: email,
            userOrders: [],
            userCart: [],
          },
          { merge: true }
        );

        route.push("/account/login");

        alert(
          "Your account has been created.Click on the login button below to continue login."
        );
      }
    );
  };

  const logout: AuthContextType["logout"] = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
