const navList = [
  { key: 1, path: "/launch", navName: "Platform Launch" },
  { key: 2, path: "/marketing-plan", navName: "Marketing Plan" },
  { key: 3, path: "/road-map", navName: "Road Map" },
  { key: 3, path: "/create-board", navName: "Create Board" },
];
export const SideNavList = () => {
  const pathName = "/launch";
  return (
    <div className="hidden sm:block mt-2">
      <div className="flex flex-col">
        {navList.map(({ key, path, navName }) => (
          <a
            key={key}
            href={path}
            className={
              pathName === path
                ? "bg-[#6461c4] rounded-md text-white px-3 py-2 text-sm font-medium m-1"
                : "text-white px-3 py-2 text-sm font-medium m-1"
            }
            aria-current="page"
          >
            {navName}
          </a>
        ))}
      </div>
    </div>
  );
};
