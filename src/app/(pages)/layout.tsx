"use client";
import appwriteAuth from "@/appwrite/appwriteAuth";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/authContext";
import { useEffect, useState } from "react";

const Pagelayout = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    appwriteAuth
      .isLoggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(false));
  }, []);

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {!loader && (
        <>
          <Header />
          <main>{children}</main>
          <footer className="h-[10vh] w-full bg-gray-800 text-white font-semibold flex items-center justify-center">
            © IFailedOnce - 2023
          </footer>
        </>
      )}
    </AuthProvider>
  );
};

export default Pagelayout;
