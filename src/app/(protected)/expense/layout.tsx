import { isloggedInServer } from "@/utils/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await isloggedInServer();
  if (!session) return;
  return <>{children}</>;
}
