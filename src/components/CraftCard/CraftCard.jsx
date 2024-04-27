import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CraftCard = ({ craft }) => {
  const { loading } = useContext(AuthContext);
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    stock_status,
    user_name,
  } = craft;
  return (
    <>
      {!loading ? (
        <div className="card card-compact bg-base-100">
          <div>
            <img src={image} alt={item_name} />
          </div>
          <div className="card-body text-center">
            <p className="flex justify-between">
              <span>By: {user_name}</span> <span>{stock_status}</span>
            </p>
            <h2 className="text-3xl">{item_name} </h2>
            <h3 className="text-lg font-semibold">
              <span>Category: {subcategory_name}</span>{" "}
            </h3>
            <h3 className="text-lg font-semibold">
              <span>Customization: {customization}</span>{" "}
            </h3>
            <p className="flex justify-between">
              <span>Price: ${price}</span> <span>Rating: {rating}</span>
            </p>
            <p className="mb-4 leading-8">{short_description}</p>
            <div className="card-actions">
              <Link
                to={`/crafts/${_id}`}
                className="btn px-6 border-none uppercase w-full text-white bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
              >
                View Details
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
export default CraftCard;
