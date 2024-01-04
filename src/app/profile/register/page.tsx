import { prisma } from "@/app/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function register(data: FormData) {
  "use server";
  try {
    const username = data.get("user-name") as string;
    const password = data.get("user-password") as string;
    const confirmPassword = data.get("confirm-user-password") as string;
    const email = data.get("user-email") as string;
    if (!username || !password || !confirmPassword || !email) {
      throw new Error("Invalid input");
    }
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }
    await prisma.user.create({
      data: {
        username,
        password,
        email,
      },
    });
  } catch (error) {
    return { error };
  }
  redirect("/");
}

export default function Register() {
  return (
    <form action={register}>
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
        <label htmlFor="confirm-user-password">Confirm Password</label>
        <input
          type="password"
          className="block mt-1 w-full rounded"
          name="confirm-user-password"
          id="confirm-user-password"
          required
        />
        <label htmlFor="user-email">email</label>
        <input
          type="email"
          className="block mt-1 w-full rounded"
          name="user-email"
          id="user-email"
          required
        />
        <span className="w-full flex items-end justify-end">
          <button
            type="submit"
            className="bg-green-400 rounded px-3 py-2 text-gray-700"
          >
            Register
          </button>
          <Link
            href="/"
            className="bg-transparent underline px-3 py-2 text-blue-700 rounded"
          >
            Login
          </Link>
        </span>
      </span>
    </form>
  );
}
