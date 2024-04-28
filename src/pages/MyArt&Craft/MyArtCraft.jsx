import { useLoaderData } from "react-router-dom";
import MyCraftItem from "../../components/MyCraftItem/MyCraftItem";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyArtCraft = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const myArt_Craft = useLoaderData();
  //   console.log(userEmail, myArt_Craft);
  const myCraftList = myArt_Craft.filter(
    (craft) => craft.user_email === userEmail
  );

  const [myCraftListItem, setMyCraftListItem] = useState(myCraftList);

  const handleFilter = async (e) => {
    e.preventDefault();
    const form = e.target;
    const customization = form.customization.value;
    console.log("clicked on filter", customization);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="text-center pt-24 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold font-playFair">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              My Art & Craft List
            </span>
          </h2>
          <p className="py-5 leading-8">
            My Art & Craft List is a private and secure route where users can
            view all the arts and crafts they have personally added to the
            database. Each user has exclusive access to their own collection,
            presented in beautifully designed cards for easy browsing and
            appreciation of their creative contributions
          </p>
        </div>
        <div className="text-center">
          <select
          onClick={handleFilter}
            className="select input input-bordered"
            name="customization"
            required
          >
            <option disabled selected>
              Is the item customizable?
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          {/* <select
            className="select select-bordered w-full max-w-xs"
            name="customization"
            onClick={handleFilter}
          >
            <option disabled selected>
              Choose Customization
            </option>
            <option>Yes</option>
            <option>No</option>
          </select> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
          {myCraftListItem.map((craft) => (
            <MyCraftItem
              key={craft._id}
              myCraft={craft}
              myCraftListItem={myCraftListItem}
              setMyCraftListItem={setMyCraftListItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MyArtCraft;
