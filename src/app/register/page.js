import Register from "@/pages/Register/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return <Register />;
};

export default RegisterPage;
