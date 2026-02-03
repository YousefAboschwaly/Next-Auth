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
