import { useState, useEffect } from "react";
import { Link, NavLink } from "remix";
import { ExternalLinkIcon, MenuIcon } from "@heroicons/react/outline";

type Props = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside className="sticky top-0 flex flex-col w-full max-h-screen overflow-auto bg-zinc-900 border-green-900 border-opacity-30 md:border-r md:w-64">
      <div className="flex justify-between items-center p-5">
        <Link to="/">
          <svg
            className="w-6 h-6 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 597 578"
            fill="currentColor"
          >
            <polygon points="318 469 318 306 461 163 488 190 356 322 356 377 516 217 570 271 597 298 318 578 318 523 543 298 516 271 318 469" />
            <polygon points="54 244 136 163 279 306 279 361 136 217 109 244 279 415 279 578 0 298 27 271 244 488 244 434 54 244" />
            <polygon points="326 136 298 163 271 136 298 109 326 136" />
            <polygon points="407 109 434 136 298 271 163 136 298 0 339 41 312 68 298 54 217 136 298 218 380 136 367 122 393 95 407 109" />
          </svg>
        </Link>
        <button
          className="md:hidden bg-transparent hover:bg-green-900 hover:bg-opacity-30"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <MenuIcon className="w-4 h-4" />
        </button>
      </div>
      {sidebarOpen && (
        <nav className="flex-1 flex-col items-stretch pb-5">{children}</nav>
      )}
    </aside>
  );
};

type NavHeaderProps = {
  children: React.ReactNode;
};

const NavHeader = ({ children }: NavHeaderProps) => {
  return (
    <h5 className="text-white mt-8 mb-2 py-2 px-5 first:mt-2">{children}</h5>
  );
};

Sidebar.NavHeader = NavHeader;

type NavItemProps = {
  label: string;
  to: string;
};

const NavItem = ({ label, to }: NavItemProps) => {
  if (to.includes("https://")) {
    return (
      <a
        className="flex items-center text-sm py-2 px-5 transition hover:bg-green-900 hover:bg-opacity-20 hover:text-white"
        href={to}
        target="_blank"
      >
        {label}
        <ExternalLinkIcon className="w-4 h-4 ml-1" />
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center text-sm py-2 px-5 transition ${
          isActive
            ? "bg-green-900 bg-opacity-30 text-green-400"
            : "hover:bg-green-900 hover:bg-opacity-20 hover:text-white"
        }`
      }
      prefetch="intent"
    >
      {label}
    </NavLink>
  );
};

Sidebar.NavItem = NavItem;
