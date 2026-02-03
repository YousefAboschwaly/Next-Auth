"use client"
import { useAuth } from "@/context/UserContext";
import { redirect } from "next/navigation";

export default function DashboardContent() {
const { user } = useAuth()  
  console.log("user in Home", user);
  if (!user?.token ) return redirect("/login");

  return (
          <div className="">
        <h1>Welcome back, {user?.name}!</h1>
      </div>
  );
}



