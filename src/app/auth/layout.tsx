import { isloggedInServer } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function AuthLoayotu() {
  const session = await isloggedInServer();
  if (session) {
    redirect("/expense");
  }
  return <></>;
}
