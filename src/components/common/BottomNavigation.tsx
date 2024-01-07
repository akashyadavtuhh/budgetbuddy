import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BottomNavigationProps {
  options: {
    name: string;
    icon: React.ReactNode;
    href: string;
    current: boolean;
  }[];
}

const BottomNavigation = ({ options }: BottomNavigationProps) => {
  return (
    <section className="block w-screen fixed bottom-0 z-10 bg-white shadow-2xl">
      <div className="flex">
        {options.map((option) => (
          <Link
            href={option.href}
            key={option.name}
            className="grow m-2 flex justify-center items-center flex-col max-w-1/4"
          >
            {option.icon}
            <span className="text-xs text-center">{option.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

// sample options
export const navOptions = [
  {
    name: "Expense",
    icon: <i className="fas fa-hand-holding-usd text-2xl"></i>,
    href: "#",
    current: true,
  },
  {
    name: "Expense Category",
    icon: <i className="fas fa-list text-2xl"></i>,
    href: "#",
    current: false,
  },
  {
    name: "Budget",
    icon: <i className="fas fa-chart-line text-2xl"></i>,
    href: "#",
    current: false,
  },
  {
    name: "profile",
    icon: (
      <Image
        className="w-7 h-7 rounded-full"
        src="https://steamavatar.io/img/1477684922UZel6.png"
        alt="Profile"
        width="28"
        height="28"
      />
    ),
    href: "#",
    current: false,
  },
];

export default BottomNavigation;
