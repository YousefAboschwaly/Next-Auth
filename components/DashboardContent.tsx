"use client";

import { logoutAction } from "@/actions/auth.actions";
import { useAuth } from "@/context/UserContext";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardContent() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.token) {
      router.push("/login");
    }
  }, [user?.token, router]);

  const handleLogout = async () => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      router.push("/login");
      return;
    }

    const res = await logoutAction(token);

    if (res.success) {
      localStorage.removeItem("userToken");

      setUser(null);

      router.push("/login");
    } else {
      console.error(res.message);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <h1 className="text-6xl">Welcome back, {user?.name}!</h1>
      <span
        onClick={handleLogout}
        className="cursor-pointer ml-4 hover:scale-110 transition text-6xl text-red-500"
      >
        <LogOut />
      </span>
    </div>
  );
}
