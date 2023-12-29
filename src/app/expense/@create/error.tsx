"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log("src/app/expense/%40create/error.tsx:5:3");
  return <main>{error.message}</main>;
}
