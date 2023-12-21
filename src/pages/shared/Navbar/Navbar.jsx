import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut().then();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="mr-2">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="mr-2">
          About
        </NavLink>
      </li>

      {user && (
        <li>
          <a onClick={handleLogOut}>Logout</a>
        </li>
      )}

      {!user && (
        <li>
          <NavLink to="/login" className="mr-2">
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-base-200">
      <div className="navbar max-w-screen-2xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">TaskCrafter</a>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
