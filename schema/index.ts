// src/schemas/signup.schema.ts
import { z } from "zod";

export const RegisterSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),

    email: z.email("Invalid email address"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),

    confirmPassword: z.string().min(6, "Confirm password is required"),

    phoneNumber: z.string().min(1, "Phone number is required"),

    countryCode: z.string().min(1, "Country code is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export type RegisterData = z.infer<typeof RegisterSchema>;
export type LoginData = z.infer<typeof LoginSchema>;
