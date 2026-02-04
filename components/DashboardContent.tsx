"use client";

import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardContent() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.token) {
      router.push("/login");
    }
  }, [user?.token, router]);



  return (
    <div>
      <h1>Welcome back, {user?.name}!</h1>
    </div>
  );
}
