import { useContext, useState } from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { logInUser, signInWithGoogle, signInWithGithub, loading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Success!",
          text: `Welcome back ${
            user.displayName ? user.displayName : user.email
          }`,
          icon: "success",
          confirmButtonText: "Cool",
        });
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Success!",
          text: `Welcome ${user.displayName ? user.displayName : user.email}`,
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Success!",
          text: `Welcome ${user.displayName ? user.displayName : user.email}`,
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login | Painting & Drawing</title>
      </Helmet>
      <div className="hero bg-base-200 my-20 rounded-xl">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left my-8">
            <h1 className="text-5xl font-bold">Login Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-12">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email address<span className="text-red-400">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
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
              <div className="form-control mt-6">
                {!loading ? (
                  <button className="btn text-white bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500">
                    Login
                  </button>
                ) : (
                  <div>
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                  </div>
                )}
              </div>
            </form>
            <div className="px-8 mb-6 flex flex-col justify-between gap-4">
              <h2 className="text-3xl font-semibold">Login with: </h2>
              {!loading ? (
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline"
                >
                  <FcGoogle className="text-2xl" /> Google
                </button>
              ) : (
                <div>
                  <span className="loading loading-ring loading-xs"></span>
                  <span className="loading loading-ring loading-sm"></span>
                  <span className="loading loading-ring loading-md"></span>
                  <span className="loading loading-ring loading-lg"></span>
                </div>
              )}
              {!loading ? (
                <button
                  onClick={handleGithubSignIn}
                  className="btn btn-outline"
                >
                  <FaGithub className="text-2xl" /> Github
                </button>
              ) : (
                <div>
                  <span className="loading loading-ring loading-xs"></span>
                  <span className="loading loading-ring loading-sm"></span>
                  <span className="loading loading-ring loading-md"></span>
                  <span className="loading loading-ring loading-lg"></span>
                </div>
              )}
            </div>
            <div className="mb-5">
              <label className="text-center">
                <p className="label-text">
                  Don't Have An Account?
                  <Link
                    to="/register"
                    className="font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text"
                  >
                    {" "}
                    Register
                  </Link>
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
