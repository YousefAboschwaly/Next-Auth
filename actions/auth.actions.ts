"use server";
import { ICountry, IRestCountryAPI } from "@/types";

export async function getCountries(): Promise<ICountry[]> {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,idd,flags",
      {
        // caching: cache the response for 24 hours
        next: { revalidate: 60 * 60 * 24 },
      },
    );

    if (!res.ok) {
      throw new Error(`rest countries failed: ${res.status} ${res.statusText}`);
    }
    const data: IRestCountryAPI[] = await res.json();
    const formatted: ICountry[] = data
      .map((c) => ({
        name: c.name?.common || "",
        code: c.idd?.root ? c.idd.root + (c.idd.suffixes?.[0] || "") : null,
        flag: c.flags?.svg || c.flags?.png || "",
      }))
      .filter((c): c is ICountry => !!c.code) // Type Guard
      .sort((a, b) => a.name.localeCompare(b.name));

    return formatted;
  } catch {
    return [
      {
        name: "Egypt",
        code: "+20",
        flag: "https://flagcdn.com/eg.svg",
      },
    ];
  }
}



import { RegisterData } from "@/schema";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export async function registerAction(data: RegisterData) {
  try {
    const formData = new FormData();

    formData.append("name", data.fullName);
    formData.append("email", data.email);
    formData.append("mobile", data.phoneNumber);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.confirmPassword);
    formData.append(
      "mobile_country_code",
      data.countryCode.replace("+", ""),
    );

    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Registration failed",
        errors: result.errors,
      };
    }
    console.log(result)

    return {
      success: true,
      data: result,
    };
  } catch {         
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
