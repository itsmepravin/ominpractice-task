"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log("pathname", pathname);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  if (pathname === "/signup" || pathname === "/login") {
    return <>{children}</>;
  }
  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="p-4 shadow-lg">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="text-red-400 font-bold text-3xl mb-4 lg:mb-0 hover:text-red-400 hover:cursor-pointer">
              TweetX{" "}
            </div>

            {/* Hamburger menu for small screens */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <div
              className={`lg:flex flex-col lg:flex-row ${
                isOpen ? "block" : "hidden"
              } lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl`}
            >
              <a
                href="/feed"
                className="text-gray-300 px-4 py-2 hover:text-red-400 "
              >
                Feed
              </a>
              <a
                href="/users"
                className="text-gray-300 px-4 py-2 hover:text-red-400"
              >
                Users
              </a>
              <a
                href="/profile"
                className="text-gray-300 px-4 py-2 hover:text-red-400"
              >
                Profile
              </a>
            </div>
          </div>
        </nav>
      </div>
      {children}
    </>
  );
}
