"use client";
import appwriteAuth from "@/appwrite/appwriteAuth";
import { avatars } from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import { Models } from "appwrite";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState<Models.User<Models.Preferences>>();
  const avatar = String(avatars.getInitials());

  useEffect(() => {
    appwriteAuth.getCurrentUser()?.then((res) => setUser(res));
  }, []);

  const { setAuthStatus } = useAuth();

  return (
    <div className="h-[80vh] w-[80vw] p-10 mx-auto">
      <div className="flex bg-gray-800 rounded-lg text-white w-full h-2/3 items-center justify-center space-x-10">
        <div>
          <img
            src={avatar}
            alt="Profile picture"
            className="rounded-full w-52 h-52"
          />
        </div>
        <div className="text-xl font-bold">
          <h1>
            Name: <span className="font-normal">{user?.name}</span>
          </h1>
          <h1>
            Email: <span className="font-normal">{user?.email}</span>
          </h1>
        </div>
      </div>
      <h1
        onClick={async () => {
          try {
            const res = await appwriteAuth.logout();
            if (res) {
              setAuthStatus(false);
              router.push("/");
            }
          } catch (error: any) {
            alert(error.message);
          }
        }}
        className="w-fit bg-red-800 text-lg font-bold rounded-lg text-white my-10 px-10 py-3 cursor-pointer hover:bg-red-700 mx-auto"
      >
        Log Out
      </h1>
    </div>
  );
};

export default Page;
