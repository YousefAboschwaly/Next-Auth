export interface IRestCountryAPI {
  name?: { common?: string; official?: string };
  idd?: { root?: string; suffixes?: string[] };
  flags?: { svg?: string; png?: string };
}

export interface ICountry {
  name: string;
  code: string;
  flag: string;
}