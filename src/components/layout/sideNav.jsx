import { Logo } from "../logo";
import { SideNavList } from "./sideNavList";
export const SideNav = () => {
  return (
    <aside className="hidden sm:flex h-screen w-64 shadow-sm">
      <nav className="bg-[#2c2c37] p-2 w-64 border-r border-[#f9fbfc] shadow-md">
        <Logo />
        <SideNavList />
      </nav>
    </aside>
  );
};
