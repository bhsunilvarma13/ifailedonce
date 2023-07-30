"use client";
import useAuth from "@/context/useAuth";
import "../../globals.css";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { authStatus } = useAuth();

  if (!authStatus) {
    router.replace("/login");
    return <></>;
  }

  return <>{children}</>;
}
