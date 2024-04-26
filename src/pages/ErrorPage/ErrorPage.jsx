import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="text-center my-10">
      <h1 className="text-8xl text-red-800 font-extrabold">Oops!</h1>
      <h2 className="text-5xl py-12">404 - Page not found!</h2>
      <p className="mb-8">Sorry, we did not find this page...</p>
      <hr className="pt-8" />
      <Link to="/" className="btn text-white bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500">
        <FaArrowLeft />
        Back to Home
      </Link>
    </div>
  );
};
export default ErrorPage;
