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
import {
  sendVerificationCode,
  verifyEmailWithToken,
} from "@/actions/auth.actions";
import { toast } from "sonner";
import { ChevronLeft, RotateCcw } from "lucide-react";

export default function Verify() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const userToken = localStorage.getItem("userToken") || "";

    const res = await verifyEmailWithToken(userToken, code);
    console.log(res);
    if (res.success) {
      toast.success(res.message || "Registered successfully");

      router.push("/login");
    } else {
      toast.error(res.message || "Verification failed");
    }
    setLoading(false);
  };

  const handleResend = async () => {
    const userToken = localStorage.getItem("userToken") || "";
    setVerifyLoading(true);
    const res = await sendVerificationCode(userToken);
    if (res.success) {
      toast.success(res.message || "Verification code resent");
    } else {
      toast.error(res.message || "Failed to resend code");
    }
    setVerifyLoading(false);
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
              <span className="font-mono font-bold text-gray-600">123456</span>
            </p>

            <div className="space-y-4">
              <Button
                type="submit"
                disabled={loading || code.length !== 6}
                className="w-full h-12 bg-[#be968e] hover:bg-[#a8827a] text-white rounded-xl font-medium shadow-sm transition-all active:scale-[0.98]"
                data-testid="btn-verify"
              >
                {loading ? "Verifying..." : "Verify Account"}
              </Button>

              <div className="flex items-center justify-between pt-2">
                <Button
                  onClick={handleResend}
                  type="button"
                  variant="ghost"
                  disabled={loading || verifyLoading}
                  className="text-[#be968e] hover:text-[#a8827a] hover:bg-[#be968e]/10 rounded-xl h-10 px-4 cursor-pointer"
                  data-testid="link-resend"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  {verifyLoading ? "Sending..." : "Resend Code"}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => router.push("/login")}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl h-10 px-4 cursor-pointer"
                  data-testid="link-signin"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back to Sign In
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
