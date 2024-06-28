import { Link } from "react-router-dom";
const data = [
  {
    name: "STAKE",
    path: "/stake",
  },
  {
    name: "BOND",
    path: "/bond",
  },
  {
    name: "FLEX LOANS",
    path: "/flex-loans",
  },
  {
    name: "OLYMPUS PRO",
    path: "/olympus-pro",
  },
  {
    name: "BLOG",
    path: "/blog",
  },
  {
    name: "TRANSPARENCY",
    path: "/transparency",
  },
  {
    name: "GOVERANCE",
    path: "/governance",
  },
];
export const Navbar = () => {
  return (
    <nav className="px-12 pt-8 flex justify-end">
      <div className="flex gap-9 text-xs">
        {data.map((item) => (
          <Link className="my-auto" key={item.name} to={item.path}>
            {item.name}
          </Link>
        ))}
        <button className="text-white bg-black px-6 py-3 rounded-3xl">
          ENTER APP
        </button>
      </div>
    </nav>
  );
};
