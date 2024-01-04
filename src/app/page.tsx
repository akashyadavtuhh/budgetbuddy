import { redirect } from "next/navigation";
import { prisma } from "./db";

async function login(data: FormData) {
  "use server";
  try {
    const username = data.get("user-name") as string;
    const password = data.get("user-password") as string;
    if (!username || !password) {
      throw new Error("Invalid input");
    }
    await prisma.user.findUnique({
      where: {
        username,
      },
    });
  } catch (error) {
    return { error };
  }
  redirect("/");
}

export default function Home() {
  return (
    <>
      <h1>nBud</h1>
      <form action={login}>
        <span className="m-2 flex flex-col justify-center items-start gap-2">
          <label htmlFor="user-name">username</label>
          <input
            type="text"
            className="block mt-1 w-full rounded"
            name="user-name"
            id="user-name"
            required
          />
          <label htmlFor="user-password">password</label>
          <input
            type="password"
            className="block mt-1 w-full rounded"
            name="user-password"
            id="user-password"
            required
          />
          <button
            type="submit"
            className="bg-blue-400  font-medium px-3 py-2 text-gray-700 rounded"
          >
            Login
          </button>
        </span>
      </form>
    </>
  );
}
