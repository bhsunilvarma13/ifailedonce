"use client";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const router = useRouter();
  const { authStatus } = useAuth();
  return (
    <div className="w-full h-[10vh] text-gray-800">
      <div className="w-[80vw] h-full mx-auto flex items-center justify-between">
        <h1
          onClick={() => router.push("/")}
          className="text-3xl cursor-pointer font-bold"
        >
          IFailedOnce
        </h1>
        {authStatus ? (
          <div className="flex text-sm h-full items-center space-x-5">
            <Link href="/about" className="cursor-pointer text-base">
              About
            </Link>
            <Link href="/me" className="cursor-pointer text-base">
              Profile
            </Link>
            <Link
              href="write-your-story"
              className="cursor-pointer bg-gray-800 text-white py-2 px-4 rounded-md font-semibold text-base tracking-wider"
            >
              Write Your Story
            </Link>
          </div>
        ) : (
          <div className="flex text-sm h-full items-center space-x-5">
            <Link href="/about" className="text-base cursor-pointer">
              About
            </Link>
            <Link href="/login" className="text-base cursor-pointer">
              Login
            </Link>
            <Link
              href="signup"
              className="cursor-pointer text-base bg-gray-800 text-white py-2 px-4 rounded-md font-semibold tracking-wider"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
