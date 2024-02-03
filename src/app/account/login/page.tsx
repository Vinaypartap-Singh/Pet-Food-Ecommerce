"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { auth, db } from "../../../../firebase";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext, AuthContextType } from "@/context/AuthContext";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

export default function Login() {
  const authContext = useContext<AuthContextType | undefined>(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userData, setUserData] = useState<{
    id: string;
    data: { username: string; email: string; userCart: []; userOrders: [] };
  } | null>(null);

  if (!authContext) {
    throw new Error("Auth Not Found Login");
  }

  const { user, login } = authContext;

  useEffect(() => {
    const docRef = doc(db, "users", `${user?.uid}`);

    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      try {
        if (snapshot.exists()) {
          const { username, email, userCart, userOrders } = snapshot.data();
          setUserData({
            id: snapshot.id,
            data: { username, email, userCart, userOrders },
          });
        } else {
          console.log("document does not exist");
        }
      } catch (error) {
        alert(error);
      }
    });

    return () => unsubscribe();
  }, [user]);
  const logInUser = async () => {
    try {
      await login(email, password);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="py-8">
      <div>
        {user ? (
          <div className="max-w-7xl m-auto px-10 lg:px-0 space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Account</h1>
              <h3 className="mt-3">Welcome {userData?.data?.username}</h3>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Your Orders</h3>
              {userData?.data?.userOrders.length ? (
                <div>Order Here</div>
              ) : (
                <div className="mt-4">
                  <h4>No Order's Found</h4>
                  <Link href={"/"} className="text-blue-500 mt-4">
                    Order Now
                  </Link>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-bold">Your Cart</h3>
              {userData?.data?.userOrders.length ? (
                <div>Cart Items</div>
              ) : (
                <div className="mt-4">
                  <h4>No Item In Cart</h4>
                  <Link href={"/"} className="text-blue-500 mt-4">
                    Order Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-5xl font-bold text-center">Log in</h1>
            <div className="max-w-2xl m-auto border mt-24 px-10 py-6 rounded-e-md space-y-8">
              <div>
                <label>
                  Email Address<span className="text-red-600">&nbsp;*</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full bg-gray-100 mt-4 px-2 py-4"
                />
              </div>
              <div>
                <label>
                  Password<span className="text-red-600">&nbsp;*</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
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
          </>
        )}
      </div>
    </div>
  );
}
