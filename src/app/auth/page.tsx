import { auth } from "@/services/auth";
import { AuthForm } from "./_components/auth-form";
import { redirect } from "next/navigation";

export default async function Page() {

  const session = await auth()
  if (session?.user) return redirect('/app')
  return <AuthForm />

}