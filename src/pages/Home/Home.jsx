import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import CraftCard from "../../components/CraftCard/CraftCard";
import { useEffect, useState } from "react";
import FeedBack from "../../components/FeedBack/FeedBack";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Rotate, Zoom } from "react-awesome-reveal";
import { FaRightFromBracket } from "react-icons/fa6";
import SubCategoryCard from "../../components/SubCategory/SubCategoryCard";

const Home = () => {
  const painting_drawing = useLoaderData();
  const [feedback, setFeedback] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!dark);
  };
  useEffect(() => {
    const reviewData = async () => {
      const res = await fetch("http://localhost:5555/feedback");
      const data = await res.json();
      setFeedback(data);
    };
    const subCategoryName = async () => {
      const res = await fetch("http://localhost:5555/categories");
      const data = await res.json();
      setSubCategory(data);
    };
    reviewData();
    subCategoryName();
  }, []);
  const totalSell = subCategory
    .map((sell) => sell.sold)
    .reduce((a, b) => a + b);

  return (
    <div className={`${dark ? "bg-slate-800" : "bg-white"}`}>
      <Zoom>
        <Banner sliderData={painting_drawing} />
      </Zoom>
      <div className="fixed top-[50%] -ml-14 hover:ml-1 z-50">
        <button
          onClick={toggleTheme}
          className="px-4 py-1 text-white rounded-xl bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500"
        >
          {dark ? (
            <span className="flex items-center gap-3">
              Light <FaRightFromBracket />
            </span>
          ) : (
            <span className="flex items-center gap-3">
              Dark <FaRightFromBracket />
            </span>
          )}
        </button>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center py-8">
          <h1 className="text-5xl font-playFair font-extrabold">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              <Typewriter
                words={["Most Popular Craft Items"]}
                loop={50}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <Rotate>
            <p
              className={`mt-5 leading-8 ${dark ? "text-white" : "text-black"}`}
            >
              Explore our most popular craft items, curated for their quality,
              creativity, and artisanal charm.
            </p>
          </Rotate>
        </div>
        {/* Craft Items Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
          {painting_drawing.map((craft) => (
            <CraftCard key={craft._id} craft={craft} />
          ))}
        </div>
        {/* Art & Craft Categories Section */}
        <div>
          <div className="text-center py-8">
            <h1 className="text-5xl font-playFair font-extrabold">
              <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
                <Typewriter
                  words={["Art & Craft Categories"]}
                  loop={50}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <Rotate>
              <p
                className={`mt-5 leading-8 ${
                  dark ? "text-white" : "text-black"
                }`}
              >
                Explore our Art & Craft Categories, curated for their quality,
                creativity, and artisanal charm.
              </p>
            </Rotate>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
              {subCategory.map((category) => (
                <SubCategoryCard key={category._id} category={category} />
              ))}
            </div>
          </div>
        </div>
        {/* Extra Section 1 */}
        <div className="mt-32 text-center max-w-xl mx-auto">
          <h2 className="text-5xl font-extrabold font-playFair">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              <Typewriter
                words={["What people say about us"]}
                loop={50}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <Rotate>
            <p
              className={`mt-5 leading-8 ${dark ? "text-white" : "text-black"}`}
            >
              Discover what our customers have to say about their delightful
              experiences with us.
            </p>
          </Rotate>
        </div>
        <div className="py-20 bg-slate-100 rounded-xl mt-8">
          <Fade>
            <FeedBack key={feedback._id} feedback={feedback} />
          </Fade>
        </div>
        {/* Extra section 2 */}
        <div>
          <h2 className="text-5xl font-extrabold font-playFair mt-5 text-center">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              <Typewriter
                words={["Our success history"]}
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
            <div
              className="py-32 text-center bg-cover mt-20 rounded-xl"
              style={{
                backgroundImage: "url(https://i.ibb.co/XztzdCV/2150981113.jpg)",
              }}
            >
              <div className="stats shadow mx-3 flex">
                <div className="stat place-items-center">
                  <div className="stat-title">Total Sold</div>
                  <div className="stat-value bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
                    {totalSell}
                  </div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-title">Social Media Reviews</div>
                  <div className="stat-value bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
                    2M
                  </div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-title">Happy customers</div>
                  <div className="stat-value bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
                    800
                  </div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-title">Product variant</div>
                  <div className="stat-value bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
                    12
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Home;
