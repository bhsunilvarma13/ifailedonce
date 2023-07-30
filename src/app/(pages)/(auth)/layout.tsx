"use client";
import useAuth from "@/context/useAuth";
import "../../globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { authStatus } = useAuth();

  useEffect(() => {
    if (authStatus) {
      router.replace("/");
    }
  }, [authStatus, router]);

  return children;
}
