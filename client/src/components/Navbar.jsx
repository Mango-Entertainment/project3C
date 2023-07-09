import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-xl text-center p-4">
      <div className="p-2">🥭 Mango Grammerjam</div>
      <div className="flex justify-between">
        <Link to={"/"} className="border rounded-lg p-2">
          Form View
        </Link>
        <Link to={"/dataview"} className="border rounded-lg p-2">
          Data View
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
