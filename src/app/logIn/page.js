import LogIn from "@/pages/LogIn/LogIn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const LogInpage = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return <LogIn />;
};

export default LogInpage;
