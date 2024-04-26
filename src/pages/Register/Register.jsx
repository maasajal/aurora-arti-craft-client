import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const checkbox = form.get("checkbox");

    // Password validation
    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "Password Length must be at least 6 characters!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Must have an Uppercase letter in the password!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Must have a Lowercase letter in the password!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    } else if (!checkbox) {
      Swal.fire({
        title: "Error!",
        text: "Please accept the terms and conditions!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    }

    // Create new user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(user, { displayName: name, photoURL: photo });
        Swal.fire({
          title: "Success!",
          text: `Welcome ${user.displayName ? user.displayName : user.email}`,
          icon: "success",
          confirmButtonText: "Cool",
        });
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Error!",
          text: `${err.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="hero bg-base-200 my-20 rounded-xl">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left my-8">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text py-3">
                Register Now
              </h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-6">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Name<span className="text-red-400">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your photo URL"
                    name="photo"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Email<span className="text-red-400">*</span>
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">
                      Password<span className="text-red-400">*</span>
                    </span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    className="absolute right-2 bottom-4"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <FaEye /> : <PiEyeClosedFill />}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                    id="terms"
                  />
                  <label className="label" htmlFor="terms">
                    <span>Please Accept</span>
                    <a href="/" target="_blank" className="label-text">
                      Terms & Conditions
                      <span className="text-red-400">*</span>
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button className="btn text-white font-semibold bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500">
                    Register
                  </button>
                </div>
              </form>
              <div className="mb-5 animate__animated animate__wobble">
                <label className="text-center">
                  <p className="label-text">
                    Already Have An Account?
                    <Link
                      to="/login"
                      className="font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text"
                    >
                      {" "}
                      Login
                    </Link>
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
