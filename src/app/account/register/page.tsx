"use client";

import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { auth, db } from "../../../../firebase";
import { useContext, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  AuthContext,
  AuthContextType,
  AuthProvider,
} from "@/context/AuthContext";

export default function Register() {
  const authContext = useContext<AuthContextType | undefined>(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  if (!authContext) {
    throw new Error("AuthProvider not found");
  }

  const { signup } = authContext;

  const registerUser = async () => {
    await signup(username, email, password);
    try {
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="py-8">
      <h1 className="text-5xl font-bold text-center">Create Account</h1>
      <div className="max-w-2xl m-auto border mt-24 px-10 py-6 rounded-e-md space-y-8">
        <div>
          <label>
            Username<span className="text-red-600">&nbsp;*</span>
          </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-gray-100 mt-4 px-2 py-4"
          />
        </div>
        <div>
          <label>
            Email Address<span className="text-red-600">&nbsp;*</span>
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100 mt-4 px-2 py-4"
          />
        </div>
        <div>
          <label>
            Password<span className="text-red-600">&nbsp;*</span>
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-100 mt-4 px-2 py-4"
          />
        </div>

        <div>
          <button
            onClick={registerUser}
            className="bg-purple-900 uppercase w-full md:w-2/3 m-auto py-4 text-white rounded-xl"
          >
            Sign up
          </button>
        </div>

        <div>
          <p>
            Already have an account ?{" "}
            <Link className="font-semibold" href={"/account/login"}>
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
