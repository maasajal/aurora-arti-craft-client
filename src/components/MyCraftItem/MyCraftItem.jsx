import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const MyCraftItem = ({ myCraft }) => {
  const { loading } = useContext(AuthContext);
  const [myCraftList, setMyCraftList] = useState(myCraft);
  const { _id, image, item_name, price, rating, customization, stock_status } =
    myCraftList;

  const handleDelete = async (id) => {
    console.log("Delete", id);
    const response = await fetch(`http://localhost:5555/crafts/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    if (data.deletedCount > 0) {
      Swal.fire({
        title: "Success!",
        text: "Item delete successfully!",
        icon: "success",
        confirmButtonText: "Cool",
      });
      const remainingCraft = await myCraftList.filter(
        (craft) => craft._id !== id
      );
      setMyCraftList(remainingCraft);
    }
  };
  return (
    <>
      {!loading ? (
        <div className="card card-compact bg-slate-300 shadow-xl">
          <div className="relative">
            <img src={image} alt={item_name} />
            <span className="absolute right-0 top-0 text-white bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 p-1">
              {stock_status}
            </span>
          </div>
          <h2 className="text-3xl text-center py-4">{item_name}</h2>
          <div className="flex justify-between items-center p-5">
            <div className="text-lg font-semibold">
              <p>
                Customization: <span>{customization}</span>{" "}
              </p>
              <p>
                Price: $<span>{price}</span>
              </p>
              <p>
                Rating:
                <span> {rating}</span>
              </p>
            </div>
            <div className="card-action flex flex-col gap-4">
              <Link
                to={`/crafts/${_id}`}
                className="btn border-none uppercase text-white bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
              >
                <FaEdit className="text-lg" /> Update
              </Link>
              <Link
                onClick={() => handleDelete(_id)}
                className="btn border-none uppercase text-white bg-gradient-to-r from-yellow-500 via-pink-600 to-purple-700"
              >
                <MdDeleteOutline className="text-2xl" /> Delete
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
