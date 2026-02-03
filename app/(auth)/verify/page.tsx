"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifyEmailWithToken } from "@/actions/auth.actions";
import { toast } from "sonner";

export default function Verify() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const userToken = localStorage.getItem("userToken") || "";

    const res = await verifyEmailWithToken(userToken, code);
    console.log(res)
    if (res.success) {
        toast.success(res.message || "Registered successfully");

      router.push("/login");
    } else {
      toast.error(res.message || "Verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f8f4f3] to-[#fefefe] p-4">
      <Card className="w-full max-w-md shadow-xl rounded-3xl border-0">
        <CardHeader className="text-center pb-2">
          <CardTitle
            className="text-2xl font-semibold text-[#020202]"
            data-testid="verify-title"
          >
            Verify Your Account
          </CardTitle>
          <p className="text-sm text-gray-500 mt-2">
            Enter the 6-digit verification code
          </p>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-testid="verify-form"
          >
            <div className="flex justify-center" data-testid="otp-container">
              <InputOTP
                maxLength={6}
                value={code}
                onChange={(value) => setCode(value)}
              >
                <InputOTPGroup className="shad-otp">
                  <InputOTPSlot index={0} className="shad-otp-slot" />
                  <InputOTPSlot index={1} className="shad-otp-slot" />
                  <InputOTPSlot index={2} className="shad-otp-slot" />
                  <InputOTPSlot index={3} className="shad-otp-slot" />
                  <InputOTPSlot index={4} className="shad-otp-slot" />
                  <InputOTPSlot index={5} className="shad-otp-slot" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <p
              className="text-center text-xs text-gray-400"
              data-testid="test-code-hint"
            >
              For testing, use code:{" "}
              <span className="font-mono font-bold">123456</span>
            </p>

            <Button
              type="submit"
              disabled={loading || code.length !== 6}
              className="w-full h-12 bg-[#be968e] hover:bg-[#a8827a] text-white rounded-xl font-medium"
              data-testid="btn-verify"
            >
              {loading ? "Verifying..." : "Verify Account"}
            </Button>
            <div className=" flex justify-center items-center  gap-8">
              <p className="text-center text-sm text-gray-500">
                <button
                  type="button"
                  className="text-[#be968e] font-medium hover:underline"
                  data-testid="link-resend"
                >
                  Resend Code
                </button>
              </p>
              <p className="text-center text-sm text-gray-500">
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="text-[#be968e] font-medium hover:underline"
                  data-testid="link-signin"
                >
                  Back to Sign In
                </button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
