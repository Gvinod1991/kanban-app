import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex-shrink-0 flex p-4">
      <h1 className="text-gray-50 rounded-md text-4xl font-medium font-mono flex space-between">
        <Bars3BottomLeftIcon className="w-8 cursor-pointer inline pr-2" />
        <span className="relative top-1 font-bold uppercase inline text-2xl text-white">
          Kanban
        </span>
      </h1>
    </div>
  );
};
