import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Slide } from "react-awesome-reveal";

const SubCategoryCard = ({ category }) => {
  const { loading } = useContext(AuthContext);
  const { _id, image, subcategory_name, description, sold } = category;
  return (
    <>
      {!loading ? (
        <Link to={`/subcategory/${subcategory_name}`}>
          <div className="card card-compact bg-slate-300 border-2 border-red-200 rounded-xl">
            <Slide direction="up">
              <div>
                <img
                  className="rounded-t-xl"
                  src={image}
                  alt={subcategory_name}
                />
              </div>
              <div className="card-body text-center">
                <h2 className="text-3xl font-semibold">
                  Sub category name: <br /> {subcategory_name}
                </h2>

                <p className="mb-4 leading-8">{description}</p>
                <div className="card-actions">
                  <p className="mb-4 leading-8 text-white bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500">
                    Total sold: <span className="text-xl">{sold}</span> pcs
                  </p>
                </div>
              </div>
            </Slide>
          </div>
        </Link>
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
export default SubCategoryCard;
