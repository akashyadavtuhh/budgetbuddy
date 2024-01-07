import { isloggedInServer } from "@/utils/auth";
import React from "react";

export default async function Protected({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await isloggedInServer();
  if (!session) return;
  return (
    <>
      <h1>nBud</h1>
      {children}
    </>
  );
}
