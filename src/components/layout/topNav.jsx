import { useState } from "react";
import { EllipsisVerticalIcon, Bars3Icon } from "@heroicons/react/24/solid";
const navList = [
  { key: 1, path: "/account", navName: "Platform Launch" },
  { key: 2, path: "/logout", navName: "Marketing Plan" },
];

export const TopNav = () => {
  const [openLeftMenu, setOpenLeftMenu] = useState(false);
  const pathName = "/launch";
  return (
    <nav className="bg-[#2c2c37] border-b border-[#f9fbfc]">
      <div className="relative flex justify-between sm:justify h-16">
        <Bars3Icon
          onClick={() => setOpenLeftMenu(!openLeftMenu)}
          className="h-5 mt-5 sm:hidden"
        />
        {openLeftMenu ? (
          <div
            className="origin-top-left absolute z-10 left-0 mt-12 w-25 rounded-sm shadow-lg p-2 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none sm:hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
          >
            {navList.map(({ key, path, navName }) => (
              <a
                href={path}
                key={key}
                className={
                  pathName == path
                    ? "block px-4 py-2 text-sm text-white bg-gray-900 rounded-md"
                    : "block px-4 py-2 text-sm text-gray-700"
                }
                role="menuitem"
                id="user - menu - item - 1"
              >
                {navName}
              </a>
            ))}
          </div>
        ) : null}
        <h1 className="text-white text-xl font-medium mt-5 pl-2">
          Platform Launch
        </h1>
        <div className="flex">
          <button
            type="button"
            class="text-white bg-[#6461c4] hover:bg-[#6461c4] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3"
          >
            Add New Task
          </button>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3">
              <button
                type="button"
                className="flex text-sm rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only"></span>

                <EllipsisVerticalIcon className="h-8 w-8 rounded-full text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
