import { getCountries } from "@/actions/auth.actions";
import RegisterForm from "@/components/RegisterForm";

export default async function RegisterPage() {
  const countries = await getCountries(); // fetch  countries data  on the Server Side
  console.log(countries);

  return <RegisterForm countries={countries} />;
}
