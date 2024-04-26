import { Link, NavLink } from "react-router-dom";
import userPhoto from "../../assets/user.png";
import "./Navbar.css";

const Navbar = () => {
  const navLinks = [
    <>
      <li key="home" className="hover:text-white mr-3">
        <NavLink to="/">Home</NavLink>
      </li>
      <li key="all-art&craft" className="hover:text-white mr-3">
        <NavLink to="/all-art&craft">All art & craft items</NavLink>
      </li>
      <li key="add-craft" className="hover:text-white mr-3">
        <NavLink to="/add-craft">Add craft item</NavLink>
      </li>
    </>,
  ];
  return (
    <div className="navbar font-semibold bg-slate-200">
      <div className="navbar px-3 md:px-5 lg:px-12 flex flex-col lg:flex-row">
        <div className="lg:navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400"
            >
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
            >
              {navLinks}
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost text-3xl font-playFair tooltip tooltip-bottom tooltip-primary"
            data-tip="Aurora Artify & Craft Online Store"
          >
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              Aurora ArtiCraft
            </span>
          </a>
        </div>
        <div className="lg:navbar-end">
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 uppercase font-bold">
              {navLinks}
            </ul>
          </div>
          <div className="dropdown dropdown-end mr-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400"
            >
              <div className="w-10 rounded-full">
                <img src={userPhoto} alt="Logged user photo" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/user-profile" className="py-3">
                  User Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/update-profile" className="py-3">
                  Update Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/login"
            className="btn px-6 border-none text-white uppercase bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
