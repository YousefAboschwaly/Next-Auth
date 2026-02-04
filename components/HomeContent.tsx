"use client"
import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default  function HomeContent() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user,router]);

  return (
          <div className="">
        <h1>Welcome back, {user?.name}!</h1>
      </div>
  );
}
