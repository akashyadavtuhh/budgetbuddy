import Link from "next/link";
export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-medium text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        accusantium perspiciatis aperiam odio ea beatae asperiores nostrum
        libero nobis excepturi similique fugiat non omnis provident, cupiditate
        corporis. Deserunt, repellat laudantium?
      </h1>
      <Link href="/auth" className="text-lg text-center  m-2 block">
        Login
      </Link>
    </div>
  );
}
