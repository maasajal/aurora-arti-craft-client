import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import CraftCard from "../../components/CraftCard/CraftCard";
import { useEffect, useState } from "react";
import FeedBack from "../../components/FeedBack/FeedBack";

const Home = () => {
  const painting_drawing = useLoaderData();
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    const reviewData = async () => {
      const res = await fetch("feedback.json");
      const data = await res.json();
      setFeedback(data);
    };
    return () => {
      reviewData();
    };
  }, []);
  return (
    <>
      <div>
        <Banner sliderData={painting_drawing} />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-3 lg:px-12 my-12">
        <div className="text-center py-8">
          <h1 className="text-5xl font-playFair font-extrabold">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              Most Popular Craft Items
            </span>
          </h1>
          <p className="mt-5 leading-8">
            Explore our most popular craft items, curated for their quality,
            creativity, and artisanal charm.
          </p>
        </div>
        {/* Craft Items Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
          {painting_drawing.map((craft) => (
            <CraftCard key={craft.id} craft={craft} />
          ))}
        </div>
        {/* Extra Section 1 */}
        <div className="mt-32 text-center max-w-xl mx-auto">
          <h2 className="text-5xl font-extrabold font-playFair">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
              What people say about us
            </span>
          </h2>
          <p className="mt-5 leading-8">
            Discover what our customers have to say about their delightful
            experiences with us.
          </p>
        </div>
        <div className="py-20 bg-slate-100 rounded-xl mt-8">
          <FeedBack feedback={feedback} />
        </div>
        {/* Extra section 2 */}
        <div
          className="py-32 text-center bg-cover mt-28"
          style={{
            backgroundImage: "url(https://i.ibb.co/XztzdCV/2150981113.jpg)",
          }}
        >
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Total Sold</div>
              <div className="stat-value">2599</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Social Media Reviews</div>
              <div className="stat-value">2M</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Happy customers</div>
              <div className="stat-value text-secondary">800</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Product variant</div>
              <div className="stat-value">12</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
