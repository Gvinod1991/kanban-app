import React, { ReactChild, ReactChildren } from "react";
import { SideNav, TopNav } from "../components/layout";

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1">
        <TopNav />
        <div className="p-2 bg-[#23232e] h-screen">{children}</div>
      </main>
    </div>
  );
};
