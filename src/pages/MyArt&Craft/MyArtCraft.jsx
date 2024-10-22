import { useLoaderData } from "react-router-dom";
import MyCraftItem from "../../components/MyCraftItem/MyCraftItem";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import { Bounce, Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

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
    const customization = e.target.value;
    console.log("Clicked on filter", customization);

    let filteredList = myCraftList;
    if (customization !== "All") {
      filteredList = myCraftList.filter(
        (craft) => craft.customization === customization
      );
      setMyCraftListItem(filteredList);
    } else {
      setMyCraftListItem(filteredList);
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Art & Craft list | Painting & Drawing</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-2">
        <div className="text-center pt-24 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold font-playFair">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              <Typewriter
                words={[`My Art & Craft List`]}
                loop={50}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <Fade>
            <p className="py-5 leading-8">
              My Art & Craft List is a private and secure route where users can
              view all the arts and crafts they have personally added to the
              database. Each user has exclusive access to their own collection,
              presented in beautifully designed cards for easy browsing and
              appreciation of their creative contributions
            </p>
          </Fade>
        </div>
        <div className="text-center">
          <Bounce>
            <select
              onChange={handleFilter}
              className="select input input-bordered"
              name="custom"
              required
            >
              <option disabled selected>
                Filter based on customization!
              </option>
              <option value="All">All</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </Bounce>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
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
