import { Link, NavLink } from "react-router-dom";
import userPhoto from "../../assets/user.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Bounce, JackInTheBox, Slide } from "react-awesome-reveal";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "You have sign out successfully!",
          icon: "success",
          confirmButtonText: "Cool",
        });
        console.log("LouOut");
      })
      .catch((error) => console.error(error));
  };
  const navLinks = [
    <>
      <Slide>
        <li key="home" className="hover:text-white mr-3">
          <NavLink to="/">Home</NavLink>
        </li>
      </Slide>
      <Slide>
        <li key="all-arts-crafts" className="hover:text-white mr-3">
          <NavLink to="/all-art-craft-items">All art & craft items</NavLink>
        </li>
      </Slide>
      <Slide>
        <li key="my-art-craft-list" className="hover:text-white mr-3">
          <NavLink to="/my-art-craft-list">My art & craft List</NavLink>
        </li>
      </Slide>
      <Slide>
        <li key="add-craft" className="hover:text-white mr-3">
          <NavLink to="/add-craft">Add craft item</NavLink>
        </li>
      </Slide>
    </>,
  ];
  return (
    <div className="navbar font-semibold bg-slate-200">
      <div className="navbar px-3 md:px-5 lg:px-12 flex flex-col lg:flex-row">
        <div className="lg:navbar-start">
          <div className="dropdown z-20">
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
            className="btn btn-ghost text-3xl font-playFair tooltip tooltip-bottom tooltip-primary z-10"
            data-tip="Aurora Artify & Craft Online Store"
          >
            <Bounce>
              <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
                Aurora ArtiCraft
              </span>
            </Bounce>
          </a>
        </div>
        <div className="lg:navbar-end">
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 uppercase font-bold">
              {navLinks}
            </ul>
          </div>

          <JackInTheBox>
            {user && (
              <div
                className="dropdown dropdown-end mr-2 tooltip tooltip-bottom tooltip-primary z-10"
                data-tip={
                  !user.displayName ? "User Name not found!" : user.displayName
                }
              >
                {!loading ? (
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={!user.photoURL ? userPhoto : user.photoURL}
                        alt="Logged user photo"
                      />
                    </div>
                  </div>
                ) : (
                  <span className="loading loading-infinity loading-lg"></span>
                )}
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      to="/user-profile"
                      className="py-3 hover:text-white"
                    >
                      User Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/update-profile"
                      className="py-3 hover:text-white"
                    >
                      Update Profile
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </JackInTheBox>
          {user ? (
            <Link
              to="/"
              onClick={handleSignOut}
              className="btn px-6 border-none text-white uppercase bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
            >
              Sign Out
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="btn px-6 mr-3 border-none text-white uppercase bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn px-6 border-none text-white uppercase bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
