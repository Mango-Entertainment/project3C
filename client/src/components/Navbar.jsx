import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-xl text-center p-4">
      <div className="p-2">🥭 Mango Grammerjam</div>
      <div className="flex justify-around">
        <Link
          to={"/"}
          className="border h-6 rounded-lg p-1 text-xs flex flex-col justify-center"
        >
          Form View
        </Link>
        <Link
          to={"/dataview"}
          className="border h-6 rounded-lg p-1 text-xs flex flex-col justify-center"
        >
          Data View
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
