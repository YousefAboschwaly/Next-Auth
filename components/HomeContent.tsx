"use client"
import { useAuth } from "@/context/UserContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export default  function HomeContent() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      redirect("/login");
    }
  }, [loading, user]);

  if (!user) return null;
  return (
          <div className="">
        <h1>Welcome back, {user?.name}!</h1>
      </div>
  );
}
