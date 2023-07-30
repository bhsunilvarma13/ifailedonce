"use client";
import appwriteAuth from "@/appwrite/appwriteAuth";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";

function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const { setAuthStatus } = useAuth();

  const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await appwriteAuth.createUserAccount(formData);
      if (userData) {
        setAuthStatus(true);
        router.push("/");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const google = async () => {
    try {
      const userData = await appwriteAuth.createGoogleSession();
      if (userData) {
        setAuthStatus(true);
        router.push("/");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmission}
      className=" rounded-lg text-gray-800 w-full h-screen md:w-3/5 lg:1/3 md:h-2/3 flex flex-col text-center justify-center md:justify-between p-20 md:p-10"
    >
      <h1 className="text-5xl font-black">ifailedonce</h1>
      <div className="flex flex-col my-10 space-y-5">
        <input
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="p-2 text-gray-800 border-2 border-gray-800 outline-none rounded-md"
          placeholder="Name"
          type="name"
        />
        <input
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          className="p-2 text-gray-800 border-2 border-gray-800 outline-none rounded-md"
          placeholder="Email"
          type="email"
        />
        <input
          value={formData.password}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, password: e.target.value }))
          }
          className="p-2 text-gray-800 border-2 border-gray-800 outline-none rounded-md"
          placeholder="Password"
          type="password"
        />
        <button
          type="submit"
          className="p-2 bg-gray-900 text-white text-lg font-light rounded-md"
        >
          Sign up
        </button>
      </div>
      <hr className="border-b mb-10 rounded-lg border-gray-800" />
      <button
        onClick={google}
        className="p-2 bg-gray-900 text-white text-lg font-light rounded-md flex items-center justify-center space-x-2"
      >
        <img src="google-icon.svg" alt="google-icon" className="w-6 h-6" />
        <span>Sign up with Google</span>
      </button>
      <p className="text-gray-500">
        Already have an account?{" "}
        <Link className="text-gray-800 underline" href="/login">
          Click here
        </Link>
      </p>
    </form>
  );
}

export default Signup;
