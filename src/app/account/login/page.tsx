"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { auth } from "../../../../firebase";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const logInUser = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (UserCrendials) => {
          alert("User Login Success");
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="py-8">
      <h1 className="text-5xl font-bold text-center">Login</h1>
      <div className="max-w-2xl m-auto border mt-24 px-10 py-6 rounded-e-md space-y-8">
        <div>
          <label>
            Email Address<span className="text-red-600">&nbsp;*</span>
          </label>
          <input type="email" className="w-full bg-gray-100 mt-4 px-2 py-4" />
        </div>
        <div>
          <label>
            Password<span className="text-red-600">&nbsp;*</span>
          </label>
          <input
            type="password"
            className="w-full bg-gray-100 mt-4 px-2 py-4"
          />
        </div>

        <div>
          <button
            onClick={logInUser}
            className="bg-purple-900 uppercase w-full md:w-2/3 m-auto py-4 text-white rounded-xl"
          >
            Log In
          </button>
        </div>

        <div>
          <p>
            Don't have an account ?{" "}
            <Link className="font-semibold" href={"/account/register"}>
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
