import { isloggedInServer } from "@/utils/auth";
import React from "react";

export default async function Protected({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await isloggedInServer();
  if (!session) return;
  return <main className="w-screen h-screen p-2">{children}</main>;
}
