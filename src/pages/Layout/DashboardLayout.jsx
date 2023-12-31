import { FaHouse } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Dashboard = () => {
  const { user } = useAuth();

  const Links = (
    <>
      <li>
        <NavLink to="/">
          <FaHouse /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/">Add New Task</NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-64 min-h-screen bg-[#4734C0] text-white py-10 px-5 shadow-sm hidden lg:block">
        <div className="flex items-center bg-white rounded-3xl shadow-sm mb-8">
          <label className="btn btn-ghost btn-circle avatar m-1">
            <div className="w-14 rounded-full ">
              {user && (
                <img
                  alt={user?.displayName}
                  src={user?.photoURL}
                  className="w-full object-cover"
                />
              )}
            </div>
          </label>
          <span className="ml-2 text-sm text-black font-semibold">
            {user?.displayName}
          </span>
        </div>

        <ul className="menu">{Links}</ul>
      </div>

      {/* for Mobile and tablet */}
      <div className="navbar bg-base-100 sticky top-0 border-b z-30 lg:hidden">
        <div className="navbar-start">
          <Link to="/" rel="noopener noreferrer">
            <span className="self-center text-2xl font-semibold ml-2 site-title">
              Task Crafter
            </span>
          </Link>
        </div>
        <div className="navbar-end">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-14 rounded-full ">
              {user && (
                <img
                  alt={user?.displayName}
                  src={user?.photoURL}
                  className="w-full object-cover"
                />
              )}
            </div>
          </label>
          <div className="dropdown dropdown-end">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
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
            </label>

            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1  bg-[#F0F1FB] min-h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
