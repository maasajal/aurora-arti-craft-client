import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const MyCraftItem = ({ myCraft }) => {
  const { loading } = useContext(AuthContext);
  const { _id, image, item_name, price, rating, customization, stock_status } =
    myCraft;
  return (
    <>
      {!loading ? (
        <div className="card card-compact bg-base-100 shadow-xl animate__animated animate__fadeInUpBig">
          <div>
            <img src={image} alt={item_name} />
          </div>
          <div className="card-body text-center">
            <p className="flex justify-between">
              <span>{stock_status}</span>
            </p>
            <h2 className="text-3xl">{item_name}</h2>
            <h3 className="text-lg font-semibold">
              <span>Customization: {customization}</span>{" "}
            </h3>
            <p className="flex justify-between">
              <span>Price: ${price}</span> <span>Rating: {rating}</span>
            </p>
            <div className="card-actions">
              <Link
                to={`/crafts/${_id}`}
                className="btn px-6 border-none uppercase w-full text-white bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
              >
                Update
              </Link>
              <Link
                to={`/crafts/${_id}`}
                className="btn px-6 border-none uppercase w-full text-white bg-gradient-to-r from-yellow-500 via-pink-600 to-purple-700"
              >
                Delete
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </>
  );
};
export default MyCraftItem;
